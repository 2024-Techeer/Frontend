import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
      <a key={index} href={item.href} className={`mt-20 ml-7 uppercase max-md:mt-10 max-md:ml-2.5 ${item.text === '프로필' ? 'font-extrabold' : 'font-medium'}`}>
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
interface ProfileData {
  photo: string;
  gender: string;
  intro: string;
  residence: string;
  status: string;
  positions: number[];
  techStacks: number[];
}
const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const response = await fetch(`http://localhost:8085/api/v1/profiles/${userId}`, {headers});
        const data: ProfileData = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, [userId]);
  if (!profileData) {
    return <div>Loading...</div>;
  }
  return (
    <section className="flex flex-col self-stretch px-5 my-auto text-4xl font-extrabold text-black uppercase max-md:mt-10 max-md:max-w-full">
      <h1 className="text-5xl max-md:max-w-full max-md:text-4xl">프로필</h1>
      <div className="mt-7">
        <img src={profileData.photo} alt="Profile" className="rounded-full w-32 h-32" />
      </div>
      <h2 className="mt-20 max-md:mt-10 max-md:max-w-full">직무</h2>
      <p className="mt-7 text-3xl font-light max-md:max-w-full">{profileData.positions.join(', ')}</p>
      <h2 className="mt-16 max-md:mt-10 max-md:max-w-full">자기소개</h2>
      <div className="shrink-0 mt-5 bg-white rounded-3xl border-2 border-solid border-neutral-400 h-[291px] p-5 max-md:max-w-full">
        {profileData.intro}
      </div>
      <h2 className="mt-10 max-md:mt-10 max-md:max-w-full">관심 스택</h2>
      <Stack items={profileData.techStacks.map((stack, index) => ({ id: `stack${index}`, text: `관심 스택 ${stack}` }))} />
      <h2 className="mt-16 max-md:mt-10 max-md:max-w-full">거주지</h2>
      <p className="mt-7 text-3xl font-light max-md:max-w-full">{profileData.residence}</p>
      <h2 className="mt-16 max-md:mt-10 max-md:max-w-full">신분</h2>
      <p className="mt-7 text-3xl font-light max-md:max-w-full">{profileData.status}</p>
      <button className="justify-center self-start px-7 py-3.5 mt-14 text-2xl font-medium whitespace-nowrap bg-red-300 rounded-3xl max-md:px-5 max-md:mt-10">
        수정
      </button>
    </section>
  );
};
const MyUserEditPage: React.FC = () => (
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
export default MyUserEditPage;







