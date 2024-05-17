import * as React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col mt-10">
      <label className="text-4xl font-semibold">{label}</label>
      <input
        className="mt-2 px-4 py-2 text-3xl font-thin rounded-2xl bg-zinc-300 text-stone-500"
        placeholder={placeholder}
      />
    </div>
  );
};

const RegisterPage: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center px-16 py-20 font-extrabold text-black bg-white max-md:px-5 h-screen">
      <div className="flex flex-col mt-32 w-full max-w-[1111px] max-md:mt-10 max-md:max-w-full">
        <h1 className="text-6xl text-center max-md:text-4xl">
          회원가입
        </h1>
        <form className="w-full">
          <InputField label="닉네임" placeholder="닉네임을 입력해주세요." />
          <InputField label="아이디" placeholder="아이디를 입력해주세요." />
          <InputField label="비밀번호" placeholder="비밀번호를 입력해주세요." />
          <InputField label="비밀번호 확인" placeholder="비밀번호를 한번 더 입력해주세요." />
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="justify-center items-center self-center px-16 py-5 mt-16 max-w-full text-4xl font-extrabold text-center text-yellow-600 bg-orange-200 rounded-2xl w-[307px] max-md:px-5 max-md:mt-10"
            >
              계정 생성
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
