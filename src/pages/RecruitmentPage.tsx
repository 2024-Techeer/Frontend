import BackButton from '../assets/images/BackButton.png';
import Profile from '../assets/images/Profile.svg';

function RecruitmentPage() {
  return (
    <div className="bg-white w-screen h-screen  mx-auto p-8 shadow-lg rounded-lg">
      <button>
        <img src={BackButton}></img>
      </button>
      <div className="flex flex-col ml-20">
        <div className="text-2xl font-bold mb-6">[디자이너] 신규 사이드 프로젝트 팀원을 모집합니다.</div>
        <div className="flex flex-row items-center gap-4">
          <img src={Profile}></img>
          <div className="text-lg font-bold">정세훈</div>
          <div className="text-xl">|</div>
          <div className="text-lg font-thin text-[#6A6A6A]">2024.04.19</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-gray-700">
          <p>
            <strong>프로젝트 명칭:</strong> 디자이니 신규 사이트 프로젝트 팀원을 모집합니다.
          </p>
        </div>
        <div className="text-gray-700">
          <p>
            <strong>모집 인원:</strong> 2명
          </p>
        </div>
        <div className="text-gray-700">
          <p>
            <strong>프로젝트 날짜:</strong> 2024.04.19
          </p>
        </div>
        <div className="text-gray-700">
          <p>
            <strong>모집 분야:</strong> 백엔드, 에세이 기간
          </p>
        </div>
        <div className="text-gray-700">
          <p>
            <strong>예상 기간:</strong> 3개월
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">지원하기</button>
      </div>
    </div>
  );
}

export default RecruitmentPage;
