import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SubmissionPage = () => {
  const { recruitmentId } = useParams();  // URL에서 recruitmentId 추출
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchApplicationForm = async () => {
      try {
        const token = localStorage.getItem('access_token'); // 로컬 스토리지에서 토큰을 가져옴
        const headers = {
         'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(`http://localhost:8085/api/v1/recruitments/${recruitmentId}/applications`,
            {headers: headers}
        );
        setApplication(response.data);
      } catch (error) {
        console.error('Failed to fetch application form:', error);
      }
    };

    fetchApplicationForm();
  }, [recruitmentId]);

  if (!application) return <div>Loading...</div>;

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'descriptive':
        return (
          <div style={{ margin: '10px', padding: '10px', borderBottom: '2px solid #FFB422' }}>
            <label>{question.title}</label>
            <input type="text" style={{ width: '100%' }} />
          </div>
        );
      case 'file':
        return (
          <div style={{ margin: '10px', padding: '10px', borderBottom: '2px solid #FFB422' }}>
            <label>{question.title}</label>
            <input type="file" style={{ width: '100%' }} />
          </div>
        );
      case 'multiple':
        return (
          <div style={{ margin: '10px', padding: '10px', borderBottom: '2px solid #FFB422' }}>
            <label>{question.title}</label>
            {question.options.map(option => (
              <div key={option.optoinId}>
                <input type="radio" name={question.questionId} value={option.optoinId} />
                {option.content}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Application Form</h1>
      {application.questions.map(question => (
        <div key={question.questionId}>
          {renderQuestion(question)}
        </div>
      ))}
    </div>
  );
};

export default SubmissionPage;
