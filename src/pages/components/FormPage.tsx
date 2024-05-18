import React, { useState } from 'react';
import MultipleChoiceForm from './MultipleChoiceForm';
import DescriptiveForm from './DescriptiveForm';
import FileUploadForm from './FileUploadForm';

const FormPage = () => {
  const [questionType, setQuestionType] = useState('');
  // 폼 배열을 관리하기 위해 고유 식별자(key)와 폼 컴포넌트(form)를 포함하는 객체 배열로 관리
  const [forms, setForms] = useState<{ key: number, form: JSX.Element }[]>([]);

  const handleAddForm = () => {
    const key = Math.random();  // 고유한 key 생성
    let formComponent;
    switch (questionType) {
      case 'multipleChoice':
        formComponent = <MultipleChoiceForm key={key} />;
        break;
      case 'descriptive':
        formComponent = <DescriptiveForm key={key} />;
        break;
      case 'file':
        formComponent = <FileUploadForm key={key} />;
        break;
      default:
        return; // 유효하지 않은 선택일 경우 추가하지 않음
    }
    // 새로운 폼과 키를 배열에 추가
    setForms(prevForms => [...prevForms, { key, form: formComponent }]);
  };

  const handleRemoveForm = (keyToRemove) => {
    setForms(prevForms => prevForms.filter(form => form.key !== keyToRemove));  // 키에 해당하는 폼을 배열에서 제거
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
          <div style={{ position: 'relative', marginTop: '80px' }}>
            {form}
            <button onClick={() => handleRemoveForm(key)} style={{
              position: 'absolute',
              top: 0,
              right: '120px', // 오른쪽에서 20px 떨어진 위치에 배치
              padding: '5px 10px',
              fontSize: '12px',
              fontWeight: 'bold', // 글씨를 더 두껍게
              cursor: 'pointer'
            }}>X</button>
          </div>
        ))}
      </div>
      <button style={{
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

export default FormPage;
