import { useLocation } from "react-router-dom";
import LoginForm from "../components/layout/LoginForm";
function SignUp() {
  const {
    state: { email },
  } = useLocation();
  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-Gray01 py-50">
      <div className="bg-white w-[400px] h-[843px] flex flex-col justify-start px-5 rounded-md border-[1px] border-gray-300">
        <div className="flex justify-between items-center py-5 px-5 mb-[30px]">
          <span className="text-[17px] text-start lighter">취소</span>
          <h2 className="text-lg text-center">회원가입</h2>
          <span>{""}</span>
        </div>
        <div className="flex flex-col gap-[9px] mb-[25px]">
          <label htmlFor="email" className="text-sm text-[#888888]">
            이메일
          </label>
          <input
            id="email"
            type="email"
            value={email}
            disabled
            className="h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide"
          />
        </div>
        <div className="flex flex-col gap-[9px] mb-[25px]">
          <label htmlFor="name" className="text-sm text-[#888888]">
            이름
          </label>
          <input
            id="name"
            type="text"
            placeholder="이름을 입력해주세요"
            className="h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide placeholder:font-light"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="number" className="text-sm text-[#888888]">
            휴대폰번호
          </label>
          <input
            id="number"
            type="tel"
            placeholder="(예시) 01013245768"
            className="h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide placeholder:font-light"
          />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
