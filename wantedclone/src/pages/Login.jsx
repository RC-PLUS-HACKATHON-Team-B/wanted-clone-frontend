import { useEffect, useState } from "react";
import "../App.css";
import OauthLogin from "../components/OauthLogin";
function Login() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(emailPattern.test(email));
  }, [email]);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-Gray01 py-50">
      <div className="bg-white w-[400px] h-[843px] flex flex-col justify-center px-5">
        <img
          className="w-[93px] object-cover mx-auto mb-[35px]"
          src="/images/svg.png"
          alt="logo"
        />
        <p className="text-center text-[23px] mb-[16px]">
          하나의 계정으로
          <br />
          더욱 편리하게
        </p>
        <p className="text-[13px] text-lightGray text-center font-light mb-[45px]">
          원티드가 제공하는 서비스를 <br /> 하나의 계정으로 모두 이용할 수
          있습니다.
        </p>
        <label className="text-lightGray text-[14px] mb-[9px]" htmlFor="email">
          이메일
        </label>
        <input
          className="px-3 h-[50px] border-[1px] rounded-md border-[#E1E2E3] placeholder:font-light mb-[36px] "
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`rounded-full h-[50px] min-h-[50px] mb-[15px] ${
            isValidEmail ? "bg-primary text-white" : "bg-inActive text-inText"
          }`}
        >
          이메일로 계속하기
        </button>
        <span className="text-[#939393] text-[12px] w-full text-center mb-[15px]">
          또는
        </span>
        {/* SOCIAL LOGIN */}
        <OauthLogin />
      </div>
    </div>
  );
}

export default Login;
