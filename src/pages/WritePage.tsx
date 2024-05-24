import BackButton from '../assets/images/BackButton.png';
import Arrow from '../assets/images/Arrow.svg';

function WritePage() {
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
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e304fbc9927c4fc9428123c790f3f019554d5b5fed450903cfd124b34023260a?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e304fbc9927c4fc9428123c790f3f019554d5b5fed450903cfd124b34023260a?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e304fbc9927c4fc9428123c790f3f019554d5b5fed450903cfd124b34023260a?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e304fbc9927c4fc9428123c790f3f019554d5b5fed450903cfd124b34023260a?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e304fbc9927c4fc9428123c790f3f019554d5b5fed450903cfd124b34023260a?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e304fbc9927c4fc9428123c790f3f019554d5b5fed450903cfd124b34023260a?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e304fbc9927c4fc9428123c790f3f019554d5b5fed450903cfd124b34023260a?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e304fbc9927c4fc9428123c790f3f019554d5b5fed450903cfd124b34023260a?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
          className="aspect-square w-[50px] max-md:ml-0.5"
        />
        <div className="self-start mt-7 ml-20 text-4xl font-bold text-black max-md:max-w-full">
          프로젝트 기본 정보를 입력해주세요.
        </div>
        <div className="shrink-0 self-end mt-14 mr-6 max-w-full h-1 bg-zinc-300 w-[1265px] max-md:mt-10 max-md:mr-2.5" />
        <div className="self-center mt-20 w-full max-w-[1162px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-bold text-neutral-500 max-md:max-w-full">모집 구분</div>
                <div className="flex gap-5 px-4 py-5 mt-7 w-full bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto my-auto text-3xl font-bold text-black">스터디/프로젝트</div>
                  <div className="flex gap-3.5">
                    <div className="shrink-0 w-0.5 bg-black border-2 border-black border-solid h-[60px]" />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
                      className="shrink-0 my-auto aspect-square w-[30px]"
                    />
                  </div>
                </div>
                <div className="mt-12 text-3xl font-bold text-neutral-500 max-md:mt-10 max-md:max-w-full">
                  진행 방식
                </div>
                <div className="flex gap-5 px-4 py-5 mt-7 w-full bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto my-auto text-3xl font-bold text-black">온라인/오프라인</div>
                  <div className="flex gap-3.5">
                    <div className="shrink-0 w-0.5 bg-black border-2 border-black border-solid h-[60px]" />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
                      className="shrink-0 my-auto aspect-square w-[30px]"
                    />
                  </div>
                </div>
                <div className="mt-7 text-3xl font-bold text-neutral-500 max-md:max-w-full">기술 스택</div>
                <div className="flex flex-1 mt-7 gap-5 px-4 py-5 bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto my-auto text-3xl font-bold text-black">프로젝트 사용 스택</div>
                  <div className="flex gap-3.5">
                    <div className="shrink-0 w-0.5 bg-black border-2 border-black border-solid h-[60px]" />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
                      className="shrink-0 my-auto aspect-square w-[30px]"
                    />
                  </div>
                </div>
                <div className="self-start mt-7  text-3xl font-bold text-neutral-500 max-md:ml-2.5">모집 포지션</div>
                <div className="flex flex-1 mt-7 gap-5 px-4 py-5 bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto my-auto text-3xl font-bold text-black">프론트엔드, 백엔드...</div>
                  <div className="flex gap-3.5">
                    <div className="shrink-0 w-0.5 bg-black border-2 border-black border-solid h-[60px]" />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
                      className="shrink-0 my-auto aspect-square w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-bold text-neutral-500 max-md:max-w-full">모집 인원</div>
                <div className="flex gap-5 px-4 py-5 mt-7 w-full bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto my-auto text-3xl font-bold text-black">인원 미정 ~ 10명 이상</div>
                  <div className="flex gap-3.5">
                    <div className="shrink-0 w-0.5 bg-black border-2 border-black border-solid h-[60px]" />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
                      className="shrink-0 my-auto aspect-square w-[30px]"
                    />
                  </div>
                </div>
                <div className="mt-12 text-3xl font-bold text-neutral-500 max-md:mt-10 max-md:max-w-full">
                  진행 기간
                </div>
                <div className="flex gap-5 px-4 py-5 mt-7 w-full bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto my-auto text-3xl font-bold text-black">기간 미정 ~ 6개월 이상</div>
                  <div className="flex gap-3.5">
                    <div className="shrink-0 w-0.5 bg-black border-2 border-black border-solid h-[60px]" />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/314b2466f0fafcaf927e9d86c6f2faa115e661bcbe4fbc01c1af966b9b985694?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
                      className="shrink-0 my-auto aspect-square w-[30px]"
                    />
                  </div>
                </div>
                <div className="mt-7 text-3xl font-bold text-neutral-500 max-md:max-w-full">모집 마감일</div>
                <div className="flex gap-5 px-4 py-5 mt-7 w-full bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto my-auto text-3xl font-bold text-black">2024-04-24</div>
                  <div className="flex gap-3.5">
                    <div className="shrink-0 w-0.5 bg-black border-2 border-black border-solid h-[60px]" />

                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/62391928e3f42b742b2e4bbac706688e8c401b315a2516adfe08646816b586e0?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/62391928e3f42b742b2e4bbac706688e8c401b315a2516adfe08646816b586e0?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62391928e3f42b742b2e4bbac706688e8c401b315a2516adfe08646816b586e0?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/62391928e3f42b742b2e4bbac706688e8c401b315a2516adfe08646816b586e0?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/62391928e3f42b742b2e4bbac706688e8c401b315a2516adfe08646816b586e0?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62391928e3f42b742b2e4bbac706688e8c401b315a2516adfe08646816b586e0?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/62391928e3f42b742b2e4bbac706688e8c401b315a2516adfe08646816b586e0?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/62391928e3f42b742b2e4bbac706688e8c401b315a2516adfe08646816b586e0?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
                      className="shrink-0 self-start w-10 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 self-center mt-7 w-full max-w-[1162px] max-md:flex-wrap max-md:max-w-full"></div>

        <div className="self-start mt-24 ml-20 text-4xl font-bold text-black max-md:mt-10 max-md:max-w-full">
          프로젝트에 대해 소개해주세요.
        </div>
        <div className="shrink-0 self-end mt-14 mr-6 max-w-full h-1 bg-zinc-300 w-[1265px] max-md:mt-10 max-md:mr-2.5" />
        <div className="self-start mt-14 ml-20 text-3xl font-bold text-neutral-500 max-md:mt-10 max-md:ml-2.5">
          제목
        </div>
        <div className="justify-center items-start self-end px-16 py-7 mt-14 mr-6 max-w-full text-3xl font-bold bg-white border border-black border-solid text-neutral-500 w-[1265px] max-md:px-5 max-md:mt-10 max-md:mr-2.5">
          글 제목을 입력해주세요!
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd64fe5fc9a247368d151d66dc49f0b8294ecdf08f9f6dea0d5080e99d24c6ef?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd64fe5fc9a247368d151d66dc49f0b8294ecdf08f9f6dea0d5080e99d24c6ef?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd64fe5fc9a247368d151d66dc49f0b8294ecdf08f9f6dea0d5080e99d24c6ef?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd64fe5fc9a247368d151d66dc49f0b8294ecdf08f9f6dea0d5080e99d24c6ef?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd64fe5fc9a247368d151d66dc49f0b8294ecdf08f9f6dea0d5080e99d24c6ef?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd64fe5fc9a247368d151d66dc49f0b8294ecdf08f9f6dea0d5080e99d24c6ef?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd64fe5fc9a247368d151d66dc49f0b8294ecdf08f9f6dea0d5080e99d24c6ef?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd64fe5fc9a247368d151d66dc49f0b8294ecdf08f9f6dea0d5080e99d24c6ef?apiKey=62dd62c2a7cc46f2885ab096fcb2c11c&"
          className="self-center mt-10 w-full border border-black border-solid aspect-[1.92] max-w-[1265px] max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex gap-5 justify-between self-end mt-11 text-3xl font-bold max-md:mt-10 max-md:mr-0.5">
          <div className="justify-center px-9 py-6 text-black whitespace-nowrap bg-zinc-300 max-md:px-5">취소</div>
          <div className="justify-center px-10 py-6 text-white bg-black max-md:px-5">글 등록</div>
        </div>
      </div>
    </div>
  );
}

export default WritePage;
