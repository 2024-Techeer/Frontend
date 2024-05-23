import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 임포트
import Arrow from '../assets/images/Arrow.svg';
import expand from '../assets/images/expand.svg';
import Project from '../assets/images/Project.svg';
import Study from '../assets/images/Study.svg';
import Python from '../assets/images/Python.svg';

function MainPage() {
  const [recruitments, setRecruitments] = useState([]);

  const fetchRecruitments = async (type, positionId, techStackId) => {
    const url = `api/v1/recruitments?type=${type}&positionId=${positionId}&techStackId=${techStackId}`;
    try {
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecruitments(data);
    } catch (error) {
      console.error('Fetch operation failed:', error);
    }
  };

  useEffect(() => {
    fetchRecruitments('all', 0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center pt-7 bg-white shadow-sm">
      <div className="flex gap-5 px-5 w-full text-black whitespace-nowrap max-w-[1376px] max-md:flex-wrap max-md:max-w-full">
        <Link to="/main" className="flex-auto text-6xl max-md:text-4xl">
          HOLA
        </Link>
        <div className="flex gap-5 my-auto text-4xl font-bold">
          <Link to="/login" className="flex-auto">
            로그인
          </Link>
          <Link to="/register" className="flex-auto">
            회원가입
          </Link>
        </div>
      </div>
      <div className="self-stretch mt-6 w-full bg-zinc-300 min-h-[4px] max-md:max-w-full" />
      <div className="flex flex-col mt-7 w-full max-w-[1252px] max-md:max-w-full">
        <div className="justify-center items-center text-center self-center px-16 py-16 w-full text-4xl font-bold text-black bg-orange-100 rounded-3xl border border-black border-solid max-w-[1033px] max-md:px-5 max-md:max-w-full">
          서비스 소개 배너
        </div>
        <div className="flex gap-5 self-start mt-14 ml-3 text-4xl font-bold whitespace-nowrap text-zinc-300 max-md:mt-10 max-md:ml-2.5">
          <div className="grow text-black">전체</div>
          <div className="flex-auto">프로젝트</div>
          <div className="flex-auto">스터디</div>
        </div>
        <div className="flex gap-5 items-start mt-8 w-full font-bold text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-1 gap-5  mt-3 text-2xl">
            <div className="flex gap-5 items-start px-4 pt-3 whitespace-nowrap bg-amber-400 border border-black border-solid rounded-[50px]">
              <div>포지션</div>
              <img loading="lazy" src={Arrow} className="shrink-0 aspect-square w-[30px]" />
            </div>
            <div className="flex gap-5 px-4 py-3 bg-amber-400 border border-black border-solid rounded-[50px]">
              <div className="my-auto">기술 스택</div>
              <img loading="lazy" src={Arrow} className="shrink-0 aspect-square w-[30px]" />
            </div>
          </div>
          <div className="flex gap-5 px-5 mt-3 py-3 text-2xl bg-amber-400 border border-black border-solid rounded-[50px]">
            <img loading="lazy" src={expand} className="shrink-0 aspect-square w-[30px]" />
            <div className="flex-auto">제목, 글 내용을 검색해보세요.</div>
          </div>
        </div>
        <div className="px-5 mt-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {recruitments.map((recruitment) => (
              <div key={recruitment.id} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-7 pt-7 pb-4 mx-auto w-full bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10">
                  <div className="flex gap-2.5 items-start px-6 py-0.5 text-base font-bold text-black whitespace-nowrap bg-yellow-100 rounded-[50px] max-md:px-5">
                    <img
                      loading="lazy"
                      src={recruitment.type === 'study' ? Study : Project}
                      className="shrink-0 self-start aspect-[0.93] w-[30px]"
                    />
                    <div className="flex-auto my-auto">{recruitment.type === 'study' ? '스터디' : '프로젝트'}</div>
                  </div>
                  <div className="mt-6 text-base font-bold text-black">
                    마감일 | <span className="">{recruitment.dueDate}</span>
                  </div>
                  <div className="mt-6 text-base font-bold text-black max-md:mr-1.5">{recruitment.title}</div>
                  <div className="justify-center px-6 py-2 mt-6 text-base font-bold text-blue-600 whitespace-nowrap bg-zinc-300 rounded-[50px] max-md:px-5">
                    전체
                  </div>
                  <div className="flex gap-3.5 mt-3 max-md:pr-5">
                    {recruitment.techStack.map((tech, index) => (
                      <img key={index} loading="lazy" src={Python} className="shrink-0 aspect-square w-[25px]" />
                    ))}
                  </div>
                  <div className="shrink-0 mt-4 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300 w-[193px] max-md:mr-1.5" />
                  <div className="z-10 shrink-0 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300 w-[193px] max-md:mr-1.5" />
                  <div className="self-end mt-2 text-base font-bold text-black">{recruitment.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
