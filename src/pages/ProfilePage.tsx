import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface ProfileData {
  photo: string;
  gender: string;
  intro: string;
  residence: string;
  status: string;
  positions: string[];
  techStacks: string[];
}

const ProfilePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(`http://localhost:8085/api/v1/profiles/${userId}`, { headers });
        setProfileData(response.data);
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
    <section className="flex flex-col self-stretch px-4 my-auto text-3xl font-extrabold text-black max-md:mt-8 max-md:max-w-full">
      <Link to="/Main" className="text-6xl mt-10 mb-10 max-md:mt-6 max-md:text-3xl">HOLA</Link>
      <h1 className="text-4xl max-md:max-w-full max-md:text-3xl">프로필</h1>
      <div className="mt-6">
        <div className="mt-6">
          <img src={profileData.photo} alt="Profile" className="rounded-full w-24 h-24" />
        </div>
        <h2 className="mt-16 max-md:mt-8 max-md:max-w-full">분야</h2>
        <p className="mt-4 text-xl font-light max-md:max-w-full">{profileData.positions.join(', ')}</p>
        <h2 className="mt-12 max-md:mt-8 max-md:max-w-full">자기소개</h2>
        <div className="shrink-0 mt-4 bg-white rounded-2xl border-2 border-solid border-neutral-400 h-[250px] p-4 max-md:max-w-full text-xl">
          {profileData.intro}
        </div>
        <h2 className="mt-10 max-md:mt-8 max-md:max-w-full">관심 스택</h2>
        <p className="mt-4 text-xl font-light max-md:max-w-full">{profileData.techStacks.join(', ')}</p>
        <h2 className="mt-12 max-md:mt-8 max-md:max-w-full">거주지</h2>
        <p className="mt-4 text-xl font-light max-md:max-w-full">{profileData.residence}</p>
        <h2 className="mt-12 max-md:mt-8 max-md:max-w-full">신분</h2>
        <p className="mt-4 text-xl font-light max-md:max-w-full">{profileData.status}</p>
        <h2 className="mt-12 max-md:mt-8 max-md:max-w-full">성별</h2>
        <p className="mt-4 text-xl font-light max-md:max-w-full">{profileData.gender}</p>
      </div>
    </section>
  );
};

export default ProfilePage;
