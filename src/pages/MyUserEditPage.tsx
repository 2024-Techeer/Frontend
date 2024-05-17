import React from 'react';

interface NavItem {
  href: string;
  text: string;
}

const navItems: NavItem[] = [
  { href: '#profile', text: '프로필' },
  { href: '#my-posts', text: '내가 쓴 글' },
  { href: '#my-requests', text: '내가 신청한 글' },
];

interface StackItem {
  id: string;
  text: string;
}

const stackItems: StackItem[] = [
  { id: 'stack1', text: '관심 스택 1' },
  { id: 'stack2', text: '관심 스택 2' },
  { id: 'stack3', text: '관심 스택 3' },
];

interface NavProps {
  items: NavItem[];
}

const Nav: React.FC<NavProps> = ({ items }) => (
  <nav className="flex flex-col grow items-start pt-16 pr-20 pb-11 pl-7 w-full text-xl text-black bg-amber-100 max-md:px-5 max-md:mt-10">
    <h2 className="ml-5 text-4xl font-extrabold uppercase max-md:ml-2.5">마이페이지</h2>
    {items.map((item, index) => (
      <a key={index} href={item.href} className={`mt-20 ml-7 uppercase max-md:mt-10 max-md:ml-2.5 ${item.text === '프로필' ? 'font-semibold' : 'font-medium'}`}>
        {item.text}
      </a>
    ))}
    <div className="text-8xl mt-[695px] max-md:mt-10 max-md:text-4xl">HOLA</div>
  </nav>
);


interface StackProps {
  items: StackItem[];
}

const Stack: React.FC<StackProps> = ({ items }) => (
  <div className="flex gap-5 mt-7 text-3xl font-light max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
    {items.map((item) => (
      <div key={item.id}>{item.text}</div>
    ))}
  </div>
);

const Profile: React.FC = () => (
  <section className="flex flex-col self-stretch px-5 my-auto text-4xl font-extrabold text-black uppercase max-md:mt-10 max-md:max-w-full">
    <h1 className="text-5xl max-md:max-w-full max-md:text-4xl">(ID) 님 프로필</h1>
    <h2 className="mt-20 max-md:mt-10 max-md:max-w-full">직무</h2>
    <p className="mt-7 text-3xl font-light max-md:max-w-full">직무</p>
    <h2 className="mt-16 max-md:mt-10 max-md:max-w-full">자기소개</h2>
    <div className="shrink-0 mt-5 bg-white rounded-3xl border-2 border-solid border-neutral-400 h-[291px] max-md:max-w-full" />
    <h2 className="mt-10 max-md:mt-10 max-md:max-w-full">관심 스택</h2>
    <Stack items={stackItems} />
    <h2 className="mt-16 max-md:mt-10 max-md:max-w-full">링크</h2>
    <p className="mt-7 text-3xl font-light max-md:max-w-full">링크</p>
    <button className="justify-center self-start px-7 py-3.5 mt-14 text-2xl font-medium whitespace-nowrap bg-red-300 rounded-3xl max-md:px-5 max-md:mt-10">
      수정
    </button>
  </section>
);

const MyComponent: React.FC = () => (
  <div className="bg-white">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <aside className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
        <Nav items={navItems} />
      </aside>
      <section className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
        <Profile />
      </section>
    </div>
  </div>
);

export default MyComponent;