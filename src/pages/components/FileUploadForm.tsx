import React, { useState } from 'react';

const FileUploadForm = ({ onChange }) => {
  const [title, setTitle] = useState<string>(''); 

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    onChange({ title: event.target.value }); // 부모 컴포넌트에 변경 사항을 전달
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

export default FileUploadForm;
