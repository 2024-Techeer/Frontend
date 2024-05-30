import * as React from "react";
import axios from "axios"; // axios 라이브러리를 사용하기 위한 import

interface NavItem {
  href: string;
  text: string;
}

const navItems: NavItem[] = [
  { href: '/MyUserEdit', text: '프로필' },
  { href: '/MyPaste', text: '내가 쓴 글' },
  { href: '/MyRecruitment', text: '내가 신청한 글' },
];

interface ProjectCardProps {
  title: string;
  date: string;
  positions: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, positions }) => (
  <article className="flex flex-col grow items-start pt-5 pr-16 pb-10 pl-6 mx-auto w-full bg-white border-solid border-[3px] border-zinc-500 rounded-[42px] max-md:px-5 max-md:mt-7">
    // 기존 코드 유지
  </article>
);

const MyPastePage: React.FC = () => {
  const [projects, setProjects] = React.useState([]); // API로부터 받아온 데이터를 저장할 상태

  // 컴포넌트가 마운트될 때 API 요청을 보냄
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('access_token');
            const headers = {
            'Authorization': `Bearer ${token}`
          };
        const response = await axios.get('http://localhost:8085/api/v1/recruitments/me', { headers });
        setProjects(response.data); // 받아온 데이터로 상태 업데이트
      } catch (error) {
        console.error("API 요청 중 오류가 발생했습니다.", error);
      }
    };

    fetchProjects();
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트가 마운트될 때만 실행

  // 기존 코드 유지
  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
        <Nav items={navItems} />
        </aside>
        <main className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <header className="flex flex-col px-5 mt-24 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-extrabold text-black uppercase max-md:max-w-full max-md:text-4xl"> (ID) 님이 쓴 글 </h1>
          </header>
          <section className="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  date={project.deadline} // API 응답에 맞게 필드 수정
                  positions={project.positions}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MyPastePage;
