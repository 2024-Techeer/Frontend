import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import BackButton from '../assets/images/BackButton.png';
import Profile from '../assets/images/Profile.svg';
import Java from '../assets/images/Java.svg';
import Python from '../assets/images/Python.svg';

function RecruitmentPage_Owner() {
  const { recruitmentId } = useParams();
  const [recruitment, setRecruitment] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();

  const fetchRecruitment = async () => {
    const url = `http://localhost:8085/api/v1/recruitments/${recruitmentId}`;
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
      setRecruitment(data);
    } catch (error) {
      console.error('Fetch operation failed:', error);
    }
  };

  const fetchApplicants = async (applicationId) => {
    const url = `http://localhost:8085/api/v1/applications/${applicationId}/submissions`;
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

      if (data && Array.isArray(data.submissionIds) && Array.isArray(data.userIds) && Array.isArray(data.userNames)) {
        const formattedApplicants = data.submissionIds.map((id, index) => ({
          submissionId: id,
          userId: data.userIds[index],
          userName: data.userNames[index]
        }));
        setApplicants(formattedApplicants);
      } else {
        setApplicants([]); // 데이터 구조가 예상과 다를 경우 빈 배열 설정
      }

    } catch (error) {
      console.error('Fetch operation for applicants failed:', error);
    }
  };

  useEffect(() => {
    fetchRecruitment();
  }, [recruitmentId]);

  useEffect(() => {
    if (recruitment) {
      fetchApplicants(recruitment.applicationId);
    }
  }, [recruitment]);

  if (!recruitment) {
    return <div>Loading...</div>;
  }
  

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
        <div className="mt-7 ml-20 text-3xl max-md:max-w-full">{recruitment.title}</div>
        <div className="flex gap-5 items-center mt-12 ml-20 whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
          <img loading="lazy" src={Profile} className="shrink-0 self-stretch aspect-square w-[50px]" />
          <div className="self-stretch my-auto font-bold">정세훈</div>
          <div className="self-stretch my-auto">|</div>
          <div className="flex-auto self-stretch my-auto text-neutral-500">
            {new Date(recruitment.startDate).toLocaleDateString()}
          </div>
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
                  <div>{recruitment.type}</div>
                  <div className="mt-12 max-md:mt-10">{recruitment.number}</div>
                  <div className="mt-14 max-md:mt-10">{recruitment.positions.join(', ')}</div>
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
                              <div>{recruitment.process}</div>
                              <div className="mt-12 max-md:mt-10">
                                {new Date(recruitment.startDate).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                            <div className="mt-2.5 text-2xl font-bold text-neutral-500 max-md:mt-10">사용 언어</div>
                          </div>
                          <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 justify-between items-start max-md:mt-10">
                              {recruitment.techStacks.map((stack) => (
                                <img
                                  key={stack}
                                  loading="lazy"
                                  src={stack === 'Java' ? Java : Python}
                                  className="shrink-0 w-10 aspect-square"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-14 text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
                        {recruitment.duration}
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-4 border-[#D9D9D9] flex-grow mt-10"></div>
        <div className="text-5xl font-bold text-zinc-800 mt-10 ml-20">프로젝트 소개</div>
        <div className="text-2xl text-zinc-800 mt-10 ml-20">{recruitment.description}</div>
        
        <div className="mt-52 text-3xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">지원자</div>
        <div className="shrink-0 mt-10 h-1 bg-zinc-300 max-md:max-w-full" />
        <div className="flex gap-5 mt-16 w-full text-2xl font-bold text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
        <div className="w-full flex flex-wrap justify-start gap-5 mt-5">
  {applicants.map((applicant, index) => (
    <div className="flex flex-col items-center m-2" style={{ flex: '1 0 calc(25% - 10px)' }}>
      <img loading="lazy" src={Profile} className="shrink-0 aspect-square w-[50px]" />
      <div className="my-auto text-center">{applicant.userName}</div>
      <div className="flex items-center justify-center gap-2 mt-2 w-full">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-1 text-lg rounded">
          프로필 보기
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-1 text-lg rounded">
          지원서 보기
        </button>
      </div>
    </div>
  ))}
</div>




        </div>
       </div>
      </div>
    );
}
export default RecruitmentPage_Owner;
