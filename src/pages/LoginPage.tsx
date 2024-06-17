import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = 'text', value, onChange }) => {
  return (
    <div className="flex flex-col mt-10">
      <label className="text-4xl font-semibold">{label}</label>
      <input
        type={type}
        className="mt-2 px-4 py-2 text-3xl font-thin rounded-2xl bg-zinc-300 text-stone-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8085/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login successful:', data);
      // 로그인 성공 시 access_token을 로컬 스토리지에 저장
      localStorage.setItem('access_token', data.access_token);
      navigate('/Main');
    } else {
      console.error('Login failed');
      // 실패 처리 로직
    }
  };

  return (
    <main className="flex flex-col justify-center items-center px-16 py-20 font-extrabold text-black bg-white max-md:px-5 h-screen">
      <div className="flex flex-col mt-32 w-full max-w-[1111px] max-md:mt-10 max-md:max-w-full">
        <h1 className="text-6xl text-center max-md:text-4xl">로그인</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <InputField
            label="아이디"
            placeholder="아이디를 입력해주세요."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center w-full ">
            <button
              type="submit"
              className="px-20 py-5 mt-8 text-4xl text-center text-yellow-600 bg-orange-200 rounded-2xl max-md:px-5 max-md:mt-10"
            >
              로그인
            </button>
          </div>{' '}
          <div className="flex justify-center w-full ">
            <Link to="/register">
              <button
                type="submit"
                className="px-16 py-5 mt-8 text-4xl text-center text-yellow-600 bg-orange-200 rounded-2xl max-md:px-5 max-md:mt-10"
              >
                회원가입
              </button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
