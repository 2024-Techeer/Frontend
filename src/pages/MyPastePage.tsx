import * as React from "react";

interface NavItem {
  href: string;
  text: string;
}

const navItems: NavItem[] = [
  { href: '#profile', text: '프로필' },
  { href: '#my-posts', text: '내가 쓴 글' },
  { href: '#my-requests', text: '내가 신청한 글' },
];

interface ProjectCardProps {
  title: string;
  date: string;
  keywords: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, keywords }) => (
  <article className="flex flex-col grow items-start pt-5 pr-16 pb-10 pl-6 mx-auto w-full bg-white border-solid border-[3px] border-zinc-500 rounded-[42px] max-md:px-5 max-md:mt-7">
    <header className="justify-center px-3 py-2 text-sm font-medium text-center text-black uppercase whitespace-nowrap bg-orange-200 rounded-[74.5px]">
      프로젝트
    </header>
    <section className="flex gap-2 items-center mt-3.5 text-xs font-medium uppercase whitespace-nowrap text-neutral-500">
      <time className="self-stretch my-auto">마감일</time>
      <span className="self-stretch">|</span>
      <time className="self-stretch my-auto">{date}</time>
    </section>
    <h2 className="mt-5 text-2xl font-semibold text-black uppercase">
      {title}
    </h2>
    <section className="flex gap-1 mt-10 font-medium text-center text-black uppercase whitespace-nowrap max-md:mt-10">
      {keywords.map((keyword, index) => (
        <span key={index} className="justify-center px-4 py-1.5 text-xs bg-cyan-200 rounded-[74.5px]">
          {keyword}
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

const MyPagePaste: React.FC = () => {
  const projects = [
    { title: "프로젝트1", date: "xx.xx", keywords: ["키워드1", "키워드2"] },
    { title: "프로젝트1", date: "xx.xx", keywords: ["키워드1", "키워드2"] },
    { title: "프로젝트1", date: "xx.xx", keywords: ["키워드1", "키워드2"] },
    { title: "프로젝트1", date: "xx.xx", keywords: ["키워드1", "키워드2"] }
  ];

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
            <h1 className="text-5xl font-extrabold text-black uppercase max-md:max-w-full max-md:text-4xl"> (ID) 님이 쓴 글 </h1>
          </header>
          <section className="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  date={project.date}
                  keywords={project.keywords}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MyPagePaste;