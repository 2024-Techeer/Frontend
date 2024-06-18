import * as React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 사용
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
  id: number;
  title: string;
  date: string;
  positions: string[];
  type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, date, positions = [], type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Recruitment_Owner/${id}`);
  };

  return (
    <article onClick={handleClick} className="cursor-pointer flex flex-col grow items-start pt-5 pr-16 pb-10 pl-6 mx-auto bg-white border-solid border-[3px] border-zinc-500 rounded-[42px] max-md:px-5 max-md:mt-7">
      <header className="justify-center px-3 py-2 text-sm font-medium text-center text-black uppercase whitespace-nowrap bg-orange-200 rounded-[74.5px]">
        {type}
      </header>
      <section className="flex gap-2 items-center mt-3.5 text-xs font-medium uppercase whitespace-nowrap text-neutral-500">
        <time className="self-stretch my-auto">마감일</time>
        <span className="self-stretch">|</span>
        <time className="self-stretch my-auto">{date}</time>
      </section>
      <h2 className="mt-5 text-2xl font-semibold text-black uppercase line-clamp-2">
        {title}
      </h2>
      <section className="flex gap-1 mt-10 font-medium text-center text-black uppercase whitespace-nowrap max-md:mt-10">
        {positions.map((position, index) => (
          <span key={index} className="justify-center px-4 py-1.5 text-xs bg-cyan-200 rounded-[74.5px]">
            {position}
          </span>
        ))}
      </section>
      <section className="flex gap-1.5 mt-3">
        <div className="shrink-0 self-start rounded-full bg-zinc-300 h-[34px] w-[34px]" />
        <div className="shrink-0 w-9 rounded-full bg-zinc-300 h-[34px]" />
        <div className="shrink-0 rounded-full bg-zinc-300 h-[35px] w-[35px]" />
      </section>
    </article>
  );
};

const MyPastePage: React.FC = () => {
  const [projects, setProjects] = React.useState<ProjectCardProps[]>([]); // 빈 배열로 초기화

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

  interface NavProps {
    items: NavItem[];
  }

  const Nav: React.FC<NavProps> = ({ items }) => (
    <nav className="flex flex-col grow items-start pt-16 pr-20 pb-11 pl-7 w-full text-xl text-black bg-amber-100 max-md:px-5 max-md:mt-10">
      <h2 className="ml-5 text-4xl font-extrabold uppercase max-md:ml-2.5">마이페이지</h2>
      {items.map((item, index) => (
        <a key={index} href={item.href} className={`mt-20 ml-7 uppercase max-md:mt-10 max-md:ml-2.5 ${item.text === '내가 쓴 글' ? 'font-extrabold' : 'font-medium'}`}>
          {item.text}
        </a>
      ))}
      <div className="text-8xl mt-[695px] max-md:mt-10 max-md:text-4xl">HOLA</div>
    </nav>
  );

  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <Nav items={navItems} />
        </aside>
        <main className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <header className="flex flex-col px-5 mt-24 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-extrabold text-black uppercase max-md:max-w-full max-md:text-4xl"> 내가 쓴 글 </h1>
          </header>
          <section className="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            {projects.length === 0 ? (
              <div className="text-center">신청한 글이 없습니다.</div>
            ) : (
              <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
                {projects.map((project) => (
                  <div key={project.id} className="w-[calc(25%-1rem)]"> {/* 1줄에 4개씩 표시하기 위해 25% 너비로 설정 */}
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      date={project.deadline}
                      positions={project.positions}
                      type={project.type}
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default MyPastePage;
