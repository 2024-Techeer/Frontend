import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

interface Choice {
  optionId: number;
}

interface Answer {
  questionId: number;
  content: string | null;
  choices: Choice[] | null;
}

interface SubmissionData {
  userId: number;
  status: string;
  answers: Answer[];
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const ViewSubmissionPage: React.FC = () => {
  const { submissionId } = useParams<{ submissionId: string }>();
  const query = useQuery();
  const recruitmentId = query.get('recruitmentId');
  const [application, setApplication] = useState<any>(null);
  const [responses, setResponses] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!recruitmentId) {
      setError('Recruitment ID is missing');
      setLoading(false);
      return;
    }

    const fetchSubmissionData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };

        // 신청서 양식 가져오기
        const applicationResponse = await axios.get(`http://localhost:8085/api/v1/recruitments/${recruitmentId}/applications`, { headers });
        setApplication(applicationResponse.data);

        // 제출된 답변 가져오기
        const submissionResponse = await axios.get<SubmissionData>(`http://localhost:8085/api/v1/applications/${applicationResponse.data.applicationId}/submissions/${submissionId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const submissionData = submissionResponse.data;

        // 제출된 답변을 초기 응답으로 설정
        const initialResponses: { [key: string]: any } = {};
        submissionData.answers.forEach((answer: any) => {
          if (answer.choices) {
            initialResponses[answer.questionId] = answer.choices.map((choice: any) => choice.optionId);
          } else {
            initialResponses[answer.questionId] = answer.content;
          }
        });
        setResponses(initialResponses);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSubmissionData();
  }, [recruitmentId, submissionId]);

  const handleAccept = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      await axios.patch(`http://localhost:8085/api/v1/applications/${application.applicationId}/submissions/${submissionId}/accepting`, {}, { headers });
      alert('Submission accepted successfully');
    } catch (err) {
      console.error('Accepting submission failed:', err);
      alert('Accepting submission failed');
    }
  };

  const handleReject = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      await axios.patch(`http://localhost:8085/api/v1/applications/${application.applicationId}/submissions/${submissionId}/rejecting`, {}, { headers });
      alert('Submission rejected successfully');
    } catch (err) {
      console.error('Rejecting submission failed:', err);
      alert('Rejecting submission failed');
    }
  };

  const renderQuestion = (question: any) => {
    switch (question.type) {
      case 'descriptive':
        return (
          <div style={{ margin: '10px', padding: '10px', borderBottom: '2px solid #FFB422' }}>
            <label>{question.title}</label>
            <textarea
              style={{ width: '100%' }}
              value={responses[question.questionId] || ''}
              readOnly
            />
          </div>
        );
      case 'file':
        return (
          <div style={{ margin: '10px', padding: '10px', borderBottom: '2px solid #FFB422' }}>
            <label>{question.title}</label>
            {responses[question.questionId] ? (
              <div>
                <button
                  onClick={() => window.open(responses[question.questionId], '_blank')}
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  파일 보기
                </button>
              </div>
            ) : (
              <input
                type="text"
                style={{ width: '100%' }}
                value="No file uploaded"
                readOnly
              />
            )}
          </div>
        );
      case 'multiple':
        return (
          <div style={{ margin: '10px', padding: '10px', borderBottom: '2px solid #FFB422' }}>
            <label>{question.title}</label>
            {question.options.map((option: any) => (
              <div key={option.optionId}>
                <input
                  type="checkbox"
                  name={question.questionId}
                  value={option.optionId}
                  checked={(responses[question.questionId] || []).includes(option.optionId)}
                  readOnly
                />
                {option.content}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Submission Details</h1>
      {application && application.questions.map((question: any) => (
        <div key={question.questionId}>
          {renderQuestion(question)}
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleAccept}
        >
          수락
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleReject}
        >
          거절
        </button>
      </div>
    </div>
  );
};

export default ViewSubmissionPage;
