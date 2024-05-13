function MainPage() {
  return (
    <div className="flex flex-col items-center pt-7 bg-white shadow-sm">
      <div className="flex gap-5 px-5 w-full text-black whitespace-nowrap max-w-[1376px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-8xl max-md:text-4xl">HOLA</div>
        <div className="flex gap-5 my-auto text-4xl font-bold">
          <div className="flex-auto">로그인</div>
          <div className="flex-auto">회원가입</div>
        </div>
      </div>
      <div className="self-stretch mt-6 w-full bg-zinc-300 min-h-[4px] max-md:max-w-full" />
      <div className="flex flex-col mt-7 w-full max-w-[1252px] max-md:max-w-full">
        <div className="justify-center items-center self-center px-16 py-16 w-full text-4xl font-bold text-black bg-orange-100 rounded-3xl border border-black border-solid max-w-[1033px] max-md:px-5 max-md:max-w-full">
          서비스 소개 배너
        </div>
        <div className="flex gap-5 self-start mt-14 ml-3 text-4xl font-bold whitespace-nowrap text-zinc-300 max-md:mt-10 max-md:ml-2.5">
          <div className="grow text-black">전체</div>
          <div className="flex-auto">프로젝트</div>
          <div className="flex-auto">스터디</div>
        </div>
        <div className="flex gap-5 items-start mt-8 w-full font-bold text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-1 gap-5 justify-between mt-3 text-2xl">
            <div className="flex gap-5 justify-between items-start px-4 pt-4 pb-2 whitespace-nowrap bg-amber-400 border border-black border-solid rounded-[50px]">
              <div>포지션</div>
              <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[30px]" />
            </div>
            <div className="flex gap-5 justify-between px-4 py-3 bg-amber-400 border border-black border-solid rounded-[50px]">
              <div className="my-auto">기술 스택</div>
              <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[30px]" />
            </div>
          </div>
          <div className="flex flex-1 gap-4 px-5 py-3 text-2xl bg-amber-400 border border-black border-solid rounded-[50px]">
            <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[30px]" />
            <div className="flex-auto">제목, 글 내용을 검색해보세요.</div>
          </div>
        </div>
        <div className="px-5 mt-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 pt-7 pb-4 mx-auto w-full bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10">
                <div className="flex gap-2.5 items-start px-6 py-0.5 text-base font-bold text-black whitespace-nowrap bg-yellow-100 rounded-[50px] max-md:px-5">
                  <img loading="lazy" srcSet="..." className="shrink-0 self-start aspect-[0.93] w-[30px]" />
                  <div className="flex-auto my-auto">스터디</div>
                </div>
                <div className="mt-6 text-base font-bold text-black">
                  마감일 | <span className="">2024.04.05</span>
                </div>
                <div className="mt-6 text-base font-bold text-black max-md:mr-1.5">
                  [맞춤형 IT 취업 및 창업 스터디] 함께 하는 실전 준비
                </div>
                <div className="justify-center px-6 py-2 mt-6 text-base font-bold text-blue-600 whitespace-nowrap bg-zinc-300 rounded-[50px] max-md:px-5">
                  전체
                </div>
                <div className="" lassName="flex gap-3.5 mt-3 max-md:pr-5">
                  <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[25px]" />
                  <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[25px]" />
                </div>
                <div className="shrink-0 mt-4 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300 w-[193px] max-md:mr-1.5" />
                <div className="z-10 shrink-0 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300 w-[193px] max-md:mr-1.5" />
                <div className="self-end mt-2 text-base font-bold text-black">정세훈</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 py-5 mx-auto w-full text-base font-bold text-black bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10">
                <div className="flex gap-1.5 px-5 py-1.5 whitespace-nowrap bg-blue-200 rounded-[50px]">
                  <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[25px]" />
                  <div className="flex-auto my-auto">프로젝트</div>
                </div>
                <div className="mt-7">
                  마감일 | <span className="">2024.04.05</span>
                </div>
                <div className="mt-7 max-md:mr-1.5 max-md:ml-1">
                  [맞춤형 IT 취업 및 창업 스터디] 함께 하는 실전 준비
                </div>
                <div className="justify-center px-4 py-2 mt-7 text-amber-500 whitespace-nowrap bg-zinc-300 rounded-[50px]">
                  프론트엔드
                </div>
                <img loading="lazy" srcSet="..." className="mt-2 ml-2.5 aspect-square w-[25px]" />
                <div className="shrink-0 mt-4 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300" />
                <div className="self-end mt-2">정세훈</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 pt-7 pb-4 mx-auto w-full bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10">
                <div className="flex gap-2.5 items-start px-6 py-0.5 text-base font-bold text-black whitespace-nowrap bg-yellow-100 rounded-[50px] max-md:px-5">
                  <img loading="lazy" srcSet="..." className="shrink-0 self-start aspect-[0.93] w-[30px]" />
                  <div className="flex-auto my-auto">스터디</div>
                </div>
                <div className="mt-6 text-base font-bold text-black">
                  마감일 | <span className="">2024.04.05</span>
                </div>
                <div className="mt-6 text-base font-bold text-black max-md:mr-1.5">
                  [맞춤형 IT 취업 및 창업 스터디] 함께 하는 실전 준비
                </div>
                <div className="justify-center px-6 py-2 mt-6 text-base font-bold text-blue-600 whitespace-nowrap bg-zinc-300 rounded-[50px] max-md:px-5">
                  전체
                </div>
                <div className="flex gap-3.5 mt-3 max-md:pr-5">
                  <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[25px]" />
                  <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[25px]" />
                </div>
                <div className="shrink-0 mt-4 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300 w-[193px] max-md:mr-1.5" />
                <div className="z-10 shrink-0 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300 w-[193px] max-md:mr-1.5" />
                <div className="self-end mt-2 text-base font-bold text-black">정세훈</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 py-5 mx-auto w-full bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10">
                <div className="flex gap-1.5 px-5 py-1.5 text-base font-bold text-black whitespace-nowrap bg-blue-200 rounded-[50px]">
                  <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[25px]" />
                  <div className="flex-auto my-auto">프로젝트</div>
                </div>
                <div className="mt-7 text-base font-bold text-black">
                  마감일 | <span className="">2024.04.05</span>
                </div>
                <div className="mt-7 text-base font-bold text-black max-md:mr-1.5 max-md:ml-1">
                  [맞춤형 IT 취업 및 창업 스터디] 함께 하는 실전 준비
                </div>
                <div className="justify-center items-start px-4 py-2 mt-7 text-base font-bold text-orange-600 whitespace-nowrap bg-zinc-300 rounded-[50px] max-md:pr-5">
                  백엔드
                </div>
                <div className="flex gap-1.5 mt-2 max-md:pr-5">
                  <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[25px]" />
                  <img loading="lazy" srcSet="..." className="shrink-0 aspect-square w-[25px]" />
                </div>
                <div className="shrink-0 mt-4 h-0.5 border-2 border-solid bg-zinc-300 border-zinc-300" />
                <div className="self-end mt-2 text-base font-bold text-black">정세훈</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between px-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="shrink-0 max-w-full bg-white rounded-3xl border border-black border-solid h-[49px] w-[259px]" />
          <div className="shrink-0 max-w-full bg-white rounded-3xl border border-black border-solid h-[49px] w-[259px]" />
          <div className="shrink-0 max-w-full bg-white rounded-3xl border border-black border-solid h-[49px] w-[259px]" />
          <div className="shrink-0 max-w-full bg-white rounded-3xl border border-black border-solid h-[49px] w-[259px]" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
