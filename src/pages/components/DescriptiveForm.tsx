import React, { useState } from 'react';

const DescriptiveForm = () => {
  const [title, setTitle] = useState<string>(''); // 질문의 제목을 저장

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value); // 제목 입력 필드의 변경을 처리
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%', borderBottom: '2px solid #FFB422', paddingBottom: '5px' }}>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter question title"
            style={{ fontWeight: 'bold', fontSize: '1.2em', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptiveForm;
