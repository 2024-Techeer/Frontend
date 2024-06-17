import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Arrow from '../assets/images/Arrow.svg';
import expand from '../assets/images/expand.svg';
import Project from '../assets/images/Project.svg';
import Study from '../assets/images/Study.svg';

import aws from '../assets/images/aws.png';
import Django from '../assets/images/Django.png';
import docker from '../assets/images/docker.png';
import Figma from '../assets/images/Figma.png';
import Flask from '../assets/images/Flask.png';
import Flutter from '../assets/images/Flutter.png';
import Git from '../assets/images/Git.png';
import Go from '../assets/images/Go.png';
import JS from '../assets/images/JS.png';
import Kotlin from '../assets/images/Kotlin.png';
import kubernetes from '../assets/images/kubernetes.png';
import MongoDB from '../assets/images/MongoDB.png';
import MySQL from '../assets/images/MySQL.png';
import Next from '../assets/images/Next.png';
import Node from '../assets/images/Node.png';
import php from '../assets/images/php.png';
import react from '../assets/images/React.png';
import ReactNative from '../assets/images/ReactNative.png';
import Ruby from '../assets/images/Ruby.png';
import Spring from '../assets/images/Spring.png';
import SVELTE from '../assets/images/SVELTE.png';
import Swift from '../assets/images/Swift.png';
import Ts from '../assets/images/Ts.png';
import Unity from '../assets/images/Unity.png';
import Vue from '../assets/images/Vue.png';

const techStackImages = {
  Spring,
  Node: Node,
  Django,
  Flask,
  Ruby,
  php,
  Go,
  MySQL,
  MongoDB,
  JavaScript: JS,
  TypeScript: Ts,
  React: react,
  Vue,
  SVELTE,
  Next: Next,
  Flutter,
  Swift,
  Kotlin,
  'React Native': ReactNative,
  Unity,
  AWS: aws,
  Docker: docker,
  Kubernetes: kubernetes,
  Figma,
  Git,
};

function MainPage() {
  const [recruitments, setRecruitments] = useState([]);
  const [showPositionOptions, setShowPositionOptions] = useState(false);
  const [showTechStackOptions, setShowTechStackOptions] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const fetchRecruitments = async () => {
    const url = `http://localhost:8085/api/v1/recruitments`;
    const token = localStorage.getItem('access_token');
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Fetched recruitments:', data);
      setRecruitments(data);
    } catch (error) {
      console.error('Fetch operation failed:', error);
    }
  };

  useEffect(() => {
    fetchRecruitments();
  }, []);

  const togglePositionOptions = () => {
    setShowPositionOptions(!showPositionOptions);
  };

  const toggleTechStackOptions = () => {
    setShowTechStackOptions(!showTechStackOptions);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleRecruitmentClick = (recruitmentId) => {
    navigate(`/Recruitment/${recruitmentId}`);
  };

  return (
    <div className="flex flex-col items-center pt-7 bg-white shadow-sm">
      <div className="flex gap-5 px-5 w-full text-black whitespace-nowrap max-w-[1376px] max-md:flex-wrap max-md:max-w-full">
        <Link to="/Main" className="flex-auto text-6xl max-md:text-4xl">
          HOLA
        </Link>
        <div className="flex gap-5 my-auto text-4xl font-bold">
          <Link to="/Login" className="flex-auto">
            로그인
          </Link>
          <Link to="/Register" className="flex-auto">
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
          <div className="relative flex flex-1 gap-5 mt-3 text-2xl">
            <div
              className="flex gap-5 items-start px-4 pt-3 whitespace-nowrap bg-amber-400 border border-black border-solid rounded-[50px] cursor-pointer"
              onClick={togglePositionOptions}
            >
              <div>포지션</div>
              <img loading="lazy" src={Arrow} className="shrink-0 aspect-square w-[30px]" />
            </div>
            {showPositionOptions && (
              <div className="absolute top-14 left-0 bg-white border border-black rounded-lg shadow-lg z-10">
                <div className="p-2">프론트엔드</div>
                <div className="p-2">백엔드</div>
                <div className="p-2">풀스택</div>
              </div>
            )}
            <div
              className="flex gap-5 px-4 py-3 bg-amber-400 border border-black border-solid rounded-[50px] cursor-pointer"
              onClick={toggleTechStackOptions}
            >
              <div className="my-auto">기술 스택</div>
              <img loading="lazy" src={Arrow} className="shrink-0 aspect-square w-[30px]" />
            </div>
            {showTechStackOptions && (
              <div className="absolute top-14 left-40 bg-white border border-black rounded-lg shadow-lg z-10">
                <div className="p-2">리액트</div>
                <div className="p-2">자바</div>
                <div className="p-2">파이썬</div>
              </div>
            )}
          </div>
          <div className="flex gap-5 px-5 mt-3 py-3 text-2xl bg-amber-400 border border-black border-solid rounded-[50px]">
            <img loading="lazy" src={expand} className="shrink-0 aspect-square w-[30px]" />
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              className="flex-auto bg-amber-400 border-none outline-none"
              placeholder="제목, 글 내용을 검색해보세요."
            />
          </div>
        </div>
        <div className="px-5 mt-7 max-md:max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-md:flex-col max-md:gap-0">
            {recruitments.length > 0 ? (
              recruitments.map((recruitment) => (
                <div
                  key={recruitment.id}
                  className="flex flex-col max-md:ml-0 max-md:w-full cursor-pointer"
                  onClick={() => handleRecruitmentClick(recruitment.id)}
                >
                  <div className="relative flex flex-col grow px-7 pt-7 pb-4 mx-auto w-full bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10">
                    <div
                      className={`flex gap-2.5 items-start px-6 py-0.5 text-base font-bold text-black whitespace-nowrap bg-yellow-100 rounded-[50px] max-md:px-5 ${
                        recruitment.closing ? 'blur-[1px]' : ''
                      }`}
                    >
                      <img
                        loading="lazy"
                        src={recruitment.type === 'study' ? Study : Project}
                        className="shrink-0 self-start aspect-[0.93] w-[30px]"
                      />
                      <div className="flex-auto my-auto">{recruitment.type}</div>
                    </div>
                    <div className={`mt-6 text-base font-bold text-black ${recruitment.closing ? 'blur-[1px]' : ''}`}>
                      마감일 | <span className="">{new Date(recruitment.deadline).toLocaleDateString()}</span>
                    </div>
                    <div
                      className={`mt-6 text-base font-bold text-black max-md:mr-1.5 ${
                        recruitment.closing ? 'blur-[1px]' : ''
                      }`}
                    >
                      {recruitment.title}
                    </div>
                    <div
                      className={`justify-center px-6 py-2 mt-6 text-base font-bold text-blue-600 whitespace-nowrap bg-zinc-300 rounded-[50px] max-md:px-5 ${
                        recruitment.closing ? 'blur-[1px]' : ''
                      }`}
                    >
                      전체
                    </div>
                    <div className={`flex gap-3.5 mt-3 max-md:pr-5 ${recruitment.closing ? 'blur-[1px]' : ''}`}>
                      {recruitment.techStacks.map((tech, index) => (
                        <img
                          key={index}
                          src={techStackImages[tech]}
                          alt={tech}
                          className="shrink-0 aspect-square w-[25px] bg-gray-200 rounded-full flex items-center justify-center"
                        />
                      ))}
                    </div>
                    <div
                      className={`z-10 shrink-0 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300 w-full max-md:mr-1.5 ${
                        recruitment.closing ? 'blur-[1px]' : ''
                      }`}
                    />
                    <div
                      className={`self-end mt-2 text-base font-bold text-black ${recruitment.closing ? 'blur-[1px]' : ''}`}
                    >
                      User ID: {recruitment.userId}
                    </div>
                    {recruitment.closing && (
                      <div className="absolute inset-0 flex items-center justify-center text-red-600 font-bold text-4xl bg-white bg-opacity-75">
                        마감
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center w-full">모집글이 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
