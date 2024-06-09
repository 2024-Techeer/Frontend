import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BackButton from '../assets/images/BackButton.png';
import Arrow from '../assets/images/Arrow.svg';

function WritePage() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('프로젝트');
  const [number, setNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [techStackIds, setTechStacks] = useState([]);
  const [positionIds, setPositions] = useState([]);
  const [introduction, setIntroduction] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      type,
      number: parseInt(number, 10),
      startDate,
      endDate,
      deadline,
      techStackIds: techStackIds.map((tech) => parseInt(tech, 10)),
      positionIds: positionIds.map((pos) => parseInt(pos, 10)),
      introduction,
    };

    try {
      const response = await fetch('http://localhost:8085/api/v1/recruitments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      navigate('/main'); // Navigate to the main page
    } catch (error) {
      console.error('Fetch operation failed:', error);
    }
  };

  const handleMultiSelectChange = (e, setState) => {
    const options = e.target.options;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setState(selectedOptions);
  };

  return (
    <div className="flex flex-col pt-7 pb-14 bg-white">
      <div className="flex gap-5 self-center px-5 w-full text-black whitespace-nowrap max-w-[1376px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-4xl max-md:text-4xl">HOLA</div>
        <div className="flex gap-5 my-auto text-4xl font-bold">
          <div className="flex-auto">로그인</div>
          <div className="flex-auto">회원가입</div>
        </div>
      </div>
      <div className="mt-6 w-full bg-zinc-300 min-h-[4px] max-md:max-w-full" />
      <div className="flex flex-col px-20 mt-9 w-full max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src={BackButton} className="aspect-square w-[50px] max-md:ml-0.5" alt="Back" />
        <div className="self-start mt-7 ml-20 text-4xl font-bold text-black max-md:max-w-full">
          프로젝트 기본 정보를 입력해주세요.
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mt-7 space-y-6">
          <div className="self-center w-full max-w-[1162px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-neutral-500">모집 구분</div>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-3 p-3 bg-white border border-black border-solid"
                >
                  <option value="프로젝트">프로젝트</option>
                  <option value="스터디">스터디</option>
                </select>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-neutral-500">모집 인원</div>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="mt-3 p-3 bg-white border border-black border-solid"
                  placeholder="모집 인원 수"
                />
              </div>

              <div className="flex flex-col">
                <div className="text-2xl font-bold text-neutral-500">진행 기간</div>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-3 p-3 bg-white border border-black border-solid"
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="mt-3 p-3 bg-white border border-black border-solid"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-neutral-500">기술 스택</div>
                <select
                  multiple
                  value={techStackIds}
                  onChange={(e) => handleMultiSelectChange(e, setTechStacks)}
                  className="mt-3 p-3 bg-white border border-black border-solid"
                >
                  <option value="1">React</option>
                  <option value="2">Java</option>
                  <option value="3">Python</option>
                  <option value="4">Node.js</option>
                </select>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-neutral-500">모집 포지션</div>
                <select
                  multiple
                  value={positionIds}
                  onChange={(e) => handleMultiSelectChange(e, setPositions)}
                  className="mt-3 p-3 bg-white border border-black border-solid"
                >
                  <option value="1">프론트엔드</option>
                  <option value="2">백엔드</option>
                  <option value="3">풀스택</option>
                </select>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-neutral-500">모집 마감일</div>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="mt-3 p-3 bg-white border border-black border-solid"
                />
              </div>
            </div>
          </div>
          <div className="self-center w-full max-w-[1162px]">
            <div className="flex flex-col mt-5">
              <div className="text-2xl font-bold text-neutral-500">프로젝트에 대해 소개해주세요.</div>
              <ReactQuill
                value={introduction}
                onChange={setIntroduction}
                className="mt-3 bg-white border border-black border-solid h-64"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-end self-end mt-11 text-2xl font-bold">
            <button type="button" className="px-9 py-4 text-black whitespace-nowrap bg-zinc-300">
              취소
            </button>
            <button type="submit" className="px-9 py-4 text-white bg-black">
              글 등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WritePage;
