import BackButton from '../assets/images/BackButton.png';
import Profile from '../assets/images/Profile.svg';
import Java from '../assets/images/Java.svg';
import Python from '../assets/images/Python.svg';

function RecruitmentPage_Owner() {
  return (
    <div className="flex flex-col items-center pt-7 pb-12 bg-white">
      <div className="flex gap-5 px-5 w-full text-black whitespace-nowrap max-w-[1376px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-6xl max-md:text-4xl">HOLA</div>
        <div className="flex gap-5 my-auto text-4xl font-bold">
          <div className="flex-auto">로그인</div>
          <div className="flex-auto">회원가입</div>
        </div>
      </div>
      <div className="self-stretch mt-6 w-full bg-zinc-300 min-h-[4px] max-md:max-w-full" />
      <div className="flex flex-col items-start mt-9 w-full text-2xl font-bold text-black max-w-[1312px] max-md:max-w-full">
        <img loading="lazy" src={BackButton} className="aspect-square w-[50px]" />
        <div className="mt-7 ml-20 text-3xl max-md:max-w-full">[디자이너] 신규 사이드 프로젝트 팀원을 모집합니다.</div>
        <div className="flex gap-5 items-center mt-12 ml-20 whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
          <img loading="lazy" src={Profile} className="shrink-0 self-stretch aspect-square w-[50px]" />
          <div className="self-stretch my-auto font-bold">정세훈</div>
          <div className="self-stretch my-auto">|</div>
          <div className="flex-auto self-stretch my-auto text-neutral-500">2024.04.10</div>
        </div>
        <div className="flex gap-5 justify-between self-end mt-2 whitespace-nowrap text-neutral-500">
          <div>마감</div>
          <div>수정</div>
          <div>삭제</div>
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full max-w-[1334px] max-md:max-w-full">
        <div className="shrink-0 h-1 bg-zinc-300 max-md:max-w-full" />
        <div className="self-center mt-16 w-full max-w-[1080px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 mt-2.5 text-2xl font-bold max-md:mt-10">
                <div className="flex flex-col flex-1 text-neutral-500">
                  <div>모집 구분</div>
                  <div className="mt-12 max-md:mt-10">모집 인원</div>
                  <div className="mt-14 max-md:mt-10">모집 분야</div>
                </div>
                <div className="flex flex-col flex-1 text-black whitespace-nowrap">
                  <div>프로젝트</div>
                  <div className="mt-12 max-md:mt-10">2명</div>
                  <div className="mt-14 max-md:mt-10">백엔드</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-2.5 text-2xl font-bold text-neutral-500 max-md:mt-10">
                      <div>진행 방식</div>
                      <div className="mt-12 max-md:mt-10">시작 예정</div>
                      <div className="mt-14 max-md:mt-10">예상 기간</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                      <div className="max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow mt-2.5 text-2xl font-bold text-black whitespace-nowrap max-md:mt-10">
                              <div>전체</div>
                              <div className="mt-12 max-md:mt-10">2024.04.19</div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                            <div className="mt-2.5 text-2xl font-bold text-neutral-500 max-md:mt-10">사용 언어</div>
                          </div>
                          <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 justify-between items-start max-md:mt-10">
                              <img loading="lazy" src={Java} className="shrink-0 w-10 aspect-square" />
                              <img loading="lazy" src={Python} className="shrink-0 mt-1 w-10 aspect-square" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-14 text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">3개월</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 text-3xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          프로젝트 소개
        </div>
        <div className="shrink-0 mt-14 h-1 bg-zinc-300 max-md:mt-10 max-md:max-w-full" />
        <div className="mt-20 text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
          이런 저런 프로젝트 입니다
        </div>
        <div className="mt-52 text-3xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">지원자</div>
        <div className="shrink-0 mt-10 h-1 bg-zinc-300 max-md:max-w-full" />
        <div className="flex gap-5 mt-16 max-w-full text-2xl font-bold text-black whitespace-nowrap w-[573px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-1 gap-5 justify-between">
            <img loading="lazy" src={Profile} className="shrink-0 aspect-square w-[50px]" />
            <div className="my-auto">정세훈</div>
          </div>
          <div className="flex flex-1 gap-5 justify-between">
            <img loading="lazy" src={Profile} className="shrink-0 aspect-square w-[50px]" />
            <div className="my-auto">정세훈</div>
          </div>
          <div className="flex flex-1 gap-5 justify-between">
            <img loading="lazy" src={Profile} className="shrink-0 aspect-square w-[50px]" />
            <div className="my-auto">정세훈</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentPage_Owner;
