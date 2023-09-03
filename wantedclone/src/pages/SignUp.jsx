import { useLocation } from "react-router-dom";
import countryTelData from "country-telephone-data";
import { useEffect, useState } from "react";
function SignUp() {
  const {
    state: { email },
  } = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [timer, setTimer] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  useEffect(() => {
    setIsPhoneNumberValid(phoneNumber.length == 11);
    console.log(phoneNumber.length);
  }, [phoneNumber]);
  useEffect(() => {
    let timerId;
    if (showTimer) {
      let timeLeft = 300; // 5 minutes in seconds
      timerId = setInterval(() => {
        timeLeft -= 1;
        setTimer(
          `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(
            2,
            "0"
          )}`
        );
        if (timeLeft <= 0) {
          clearInterval(timerId);
          setShowTimer(false);
        }
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [showTimer]);
  const handleRequestCode = () => {
    if (isPhoneNumberValid) {
      setShowTimer(true);
    }
  };
  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-Gray01 py-50">
      <div className="bg-white w-[400px] h-[843px] flex flex-col justify-start px-5 rounded-md border-[1px] border-gray-300 overflow-scroll relative">
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
          <select
            defaultValue={+82}
            className="h-[50px] rounded-md border-[1px] border-gray-300 px-3 lighter"
          >
            {countryTelData.allCountries.map((country, index) => (
              <option key={index} value={country.dialCode}>
                {`${country.name} +${country.dialCode}`}
              </option>
            ))}
          </select>
          <div className="flex items-center justify-between">
            <input
              id="number"
              type="tel"
              placeholder="(예시) 01013245768"
              className="flex-[0.65] h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide placeholder:font-light"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              className={`flex-[0.3] h-[50px] px-[15px] rounded-md bg-[#F2F4F7] ${
                isPhoneNumberValid ? "text-primary" : "text-inText"
              }`}
              onClick={handleRequestCode}
            >
              인증번호 받기
            </button>
          </div>

          <input
            type="text"
            disabled
            placeholder="인증번호를 입력해주세요"
            className="mb-[25px] h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide"
          />
          {showTimer && (
            <div className="text-primary text-[14px] flex flex-col">
              <span className="lighter">인증번호가 요청되었습니다.</span>
              남은 시간: {timer}
            </div>
          )}
          <div className="flex flex-col gap-[9px] mb-[25px]">
            <label htmlFor="password" className="text-sm text-[#888888]">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide"
            />
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 다시 한번 입력해주세요"
              className="h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide"
            />
            <p className="text-start lighter text-[13px] text-gray-400 tracking-wider">
              영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
              16자 이하로 입력해주세요.
            </p>
          </div>
        </div>
        <button className="w-full h-[50px] rounded-full bg-inActive text-inText sticky mt-[20px]">
          가입하기
        </button>
      </div>
    </section>
  );
}

export default SignUp;
