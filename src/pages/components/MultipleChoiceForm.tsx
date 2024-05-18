import React, { useState } from 'react';

interface Option {
  id: number;
  value: string;
}

const MultipleChoiceForm = () => {
  const [title, setTitle] = useState<string>(''); // 질문의 제목을 저장
  const [options, setOptions] = useState<Option[]>([{ id: Date.now(), value: '' }]); // 옵션들을 배열로 저장

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
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
      {options.map((option, index) => (
        <div key={option.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '80%' }}>
            <input
              type="text"
              value={option.value}
              onChange={(e) => setOptions(
                options.map((o, i) => i === index ? { ...o, value: e.target.value } : o)
              )}
              placeholder="Option"
              style={{ width: 'calc(100% - 40px)' }}
            />
            <button onClick={() => setOptions(options.filter(o => o.id !== option.id))} style={{ width: '30px', marginLeft: '10px' }}>
              x
            </button>
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%' }}>
          <button onClick={() => setOptions([...options, { id: Date.now(), value: '' }])}>Add Option</button>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceForm;
