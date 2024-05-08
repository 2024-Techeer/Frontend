import BackButton from '../assets/images/BackButton.png';
import Profile from '../assets/images/Profile.svg';
import Java from '../assets/images/Java.svg';
import Python from '../assets/images/Python.svg';

function RecruitmentPage_Oner() {
  return (
    <div className="bg-white w-screen h-screen  mx-auto p-8 shadow-lg rounded-lg">
      <button>
        <img src={BackButton}></img>
      </button>
      <div className="flex flex-col ml-20">
        <div className="text-2xl font-bold mb-6">[디자이너] 신규 사이드 프로젝트 팀원을 모집합니다.</div>
        <div className="flex flex-row items-center gap-4 mb-10">
          <img src={Profile}></img>
          <div className="text-lg font-bold">정세훈</div>
          <div className="text-xl">|</div>
          <div className="text-lg font-thin text-[#6A6A6A]">2024.04.19</div>
        </div>
      </div>
      <div className="border-t border-4 border-[#D9D9D9] flex-grow mb-10"></div>
      <div className="grid grid-cols-3 gap-4 gap-y-10 ml-10">
        <div className="flex flex-row gap-10">
          <div className="text-gray-700 text-">
            <strong>모집 구분</strong>
          </div>
          <div className="text-gray-700 text-">
            <strong>프로젝트</strong>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="text-gray-700 text-">
            <strong>모집 인원</strong>
          </div>
          <div className="text-gray-700 text-">
            <strong>2명</strong>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="text-gray-700 text-">
            <strong>모집 분야</strong>
          </div>
          <div className="text-gray-700 text-">
            <strong>백엔드</strong>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="text-gray-700 text-">
            <strong>진행 방식</strong>
          </div>
          <div className="text-gray-700 text-">
            <strong>전체</strong>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="text-gray-700 text-">
            <strong>시작 예정</strong>
          </div>
          <div className="text-gray-700 text-">
            <strong>2024.04.19</strong>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="text-gray-700 text-">
            <strong>예상 기간</strong>
          </div>
          <div className="text-gray-700 text-">
            <strong>3개월</strong>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="text-gray-700 text-">
            <strong>사용 언어</strong>
          </div>
          <img src={Java}></img>
          <img src={Python}></img>
        </div>
      </div>

      <div className="border-t border-4 border-[#D9D9D9] flex-grow mt-10"></div>
      <div className="text-5xl font-bold text-zinc-800 mt-10 ml-20">프로젝트 소개</div>
      <div className="text-2xl text-zinc-800 mt-10 ml-20">이런 저런 프로젝트 입니다.</div>
      <div className="border-t border-4 border-[#D9D9D9] flex-grow mt-10"></div>
      <div className="text-5xl font-bold text-zinc-800 mt-10 ml-20">지원자</div>
      <div className="flex flex-row mt-5 ml-20 gap-4 items-center">
        <img src={Profile}></img>
        <div className="text-lg font-bold">정세훈</div>
        <img src={Profile}></img>
        <div className="text-lg font-bold">정세훈</div>
        <img src={Profile}></img>
        <div className="text-lg font-bold">정세훈</div>
      </div>
      <div className="flex justify-end">
        <button className="mt-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">지원하기</button>
      </div>
    </div>
  );
}

export default RecruitmentPage_Oner;
