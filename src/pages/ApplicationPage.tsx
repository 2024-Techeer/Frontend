import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MultipleChoiceForm from './components/MultipleChoiceForm';
import DescriptiveForm from './components/DescriptiveForm';
import FileUploadForm from './components/FileUploadForm';
import axios from 'axios';

const ApplicationPage = () => {
  const { recruitmentId } = useParams();
  const navigate = useNavigate();
  const [questionType, setQuestionType] = useState('');
  const [forms, setForms] = useState<{ key: number, form: JSX.Element, type: string, data: any }[]>([]);

  const handleAddForm = () => {
    const key = Math.random();
    let formComponent;
    switch (questionType) {
      case 'multipleChoice':
        formComponent = <MultipleChoiceForm key={key} onChange={(data) => handleFormChange(key, data)} />;
        break;
      case 'descriptive':
        formComponent = <DescriptiveForm key={key} onChange={(data) => handleFormChange(key, data)} />;
        break;
      case 'file':
        formComponent = <FileUploadForm key={key} onChange={(data) => handleFormChange(key, data)} />;
        break;
      default:
        return;
    }
    setForms(prevForms => [...prevForms, { key, form: formComponent, type: questionType === 'multipleChoice' ? 'multiple' : questionType, data: null }]);
  };

  const handleRemoveForm = (keyToRemove) => {
    setForms(prevForms => prevForms.filter(form => form.key !== keyToRemove));
  };

  const handleFormChange = (key, data) => {
    setForms(prevForms => prevForms.map(form => form.key === key ? { ...form, data } : form));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('access_token'); // 로컬 스토리지에서 토큰을 가져옴
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    try {
      // 1. 신청서 양식 생성
      const applicationResponse = await axios.post(
        `http://localhost:8085/api/v1/recruitments/${recruitmentId}/applications`,
        {},
        { headers }
      );
      const applicationId = applicationResponse.data.applicationId;

      // 2. 각 질문 생성
      for (const { type, data } of forms) {
        let requestBody = { type, title: data.title };
        if (type === 'multiple') {
          requestBody = { ...requestBody, options: data.options.map(option => option.value) };
        }
        await axios.post(
          `http://localhost:8085/api/v1/applications/${applicationId}/questions`,
          requestBody,
          { headers }
        );
      }

      alert('신청서 양식 생성 완료!');
      navigate('/Main'); // Main 페이지로 이동
    } catch (error) {
      console.error('Error creating application or questions:', error);
      alert('Failed to create application or questions.');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '50px' }}>
        <select value={questionType} onChange={(e) => setQuestionType(e.target.value)} style={{ marginRight: '10px' }}>
          <option value="">폼 선택...</option>
          <option value="multipleChoice">객관식</option>
          <option value="descriptive">서술형</option>
          <option value="file">파일</option>
        </select>
        <button onClick={handleAddForm}>Add</button>
      </div>
      <div>
        {forms.map(({ key, form }) => (
          <div key={key} style={{ position: 'relative', marginTop: '80px' }}>
            {form}
            <button onClick={() => handleRemoveForm(key)} style={{
              position: 'absolute',
              top: 0,
              right: '120px',
              padding: '5px 10px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>X</button>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} style={{
        position: 'fixed',
        right: '50px',
        bottom: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>생성</button>
    </div>
  );
};

export default ApplicationPage;
