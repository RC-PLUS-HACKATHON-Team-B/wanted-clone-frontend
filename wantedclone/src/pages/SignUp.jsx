import { useLocation } from "react-router-dom";
import countryTelData from "country-telephone-data";
import usePhoneNumberValidation from "../hook/usePhoneNumber";
import useTimer from "../hook/useTimer";
import Header from "../components/Header";
import { AiOutlineCheck } from "react-icons/ai";
import { useEffect, useState } from "react";
import EmailInput from "../components/EmailInput";
import useIndividualChecks from "../hook/useIndividualChecks";
function SignUp() {
  const {
    state: { email },
  } = useLocation();
  const [phoneNumber, setPhoneNumber, isPhoneNumberValid] =
    usePhoneNumberValidation();
  const [timer, showTimer, setShowTimer] = useTimer(300);
  const [name, setName] = useState(""); // 이름 상태
  const [nameError, setNameError] = useState(""); // 이름 유효성 오류 메시지 상태

  const handleNameChange = (e) => {
    setName(e.target.value);

    const regex = /[\s\W]/;
    if (regex.test(e.target.value)) {
      setNameError("이름에는 공백과 특수문자가 포함될 수 없습니다.");
    } else {
      setNameError("");
    }
  };
  const handleRequestCode = () => {
    if (isPhoneNumberValid) {
      setShowTimer(true);
    }
  };
  const [selectAll, setSelectAll] = useState(false);
  const {
    individualChecks,
    handleIndividualCheck,
    updateCheckbox4,
    updateAllCheckboxes,
  } = useIndividualChecks();

  const [notificationMethods, setNotificationMethods] = useState({
    email: false,
    appPush: false,
    textMessage: false,
  });

  const handleNotificationMethodChange = (method) => {
    setNotificationMethods((prev) => ({
      ...prev,
      [method]: !prev[method],
    }));
  };

  useEffect(() => {
    const anyChecked = Object.values(notificationMethods).some(Boolean);
    updateCheckbox4(anyChecked);
  }, [notificationMethods]);

  const handleSelectAll = (e) => {
    updateAllCheckboxes(e.target.checked);
  };

  useEffect(() => {
    const allChecked = Object.values(individualChecks).every((val) => val);
    setSelectAll(allChecked);
  }, [individualChecks]);

  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-Gray01 py-50">
      <div className="bg-white w-[400px] h-[843px] flex flex-col justify-start px-5 rounded-md border-[1px] border-gray-300 overflow-scroll relative">
        <Header title={"회원가입"} />
        <EmailInput email={email} />
        <div className="flex flex-col gap-[9px] mb-[25px]">
          <label htmlFor="name" className="text-sm text-[#888888]">
            이름
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="이름을 입력해주세요"
            className={`h-[50px] px-3 rounded-md border-[1px] ${
              nameError ? "border-red-500" : " border-[#E1E2E3]"
            } lighter tracking-wide placeholder:font-light`}
          />
          {nameError && <div className="text-red-500 text-sm">{nameError}</div>}
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
              className="flex-[0.65] h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] lighter tracking-wide placeholder:font-light"
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
            disabled={!showTimer} // showTimer가 true인 경우에만 활성화됩니다.
            placeholder="인증번호를 입력해주세요"
            className="h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide"
          />
          {showTimer && (
            <div className="text-primary text-[14px] flex flex-col">
              <span className="lighter">인증번호가 요청되었습니다.</span>
              유효시간: {timer}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[9px] my-[25px] ">
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
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            className="h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide"
          />
          <p className="text-start lighter text-[13px] text-gray-400 tracking-wider">
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자
            이하로 입력해주세요.
          </p>
        </div>
        {/* 체크박스 */}
        <div className="flex flex-col gap-[14px]">
          <label className="text-[15px] flex items-center gap-2 semibolder mt-[">
            <input
              className="w-4 h-4"
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            전체 동의
          </label>
          <div className="w-full h-[1px] bg-gray-300" />
          <label className="text-gray-400 text-[15px] flex items-center gap-2 semibolder">
            <input
              className="w-4 h-4"
              type="checkbox"
              name="checkbox1"
              checked={individualChecks.checkbox1}
              onChange={handleIndividualCheck}
            />
            만 14세 이상입니다. (필수)
          </label>

          <label className="text-gray-400 text-[15px] flex items-center gap-2 semibolder">
            <input
              className="w-4 h-4"
              type="checkbox"
              name="checkbox2"
              checked={individualChecks.checkbox2}
              onChange={handleIndividualCheck}
              required
            />
            원티드 이용약관 동의 (필수)
          </label>

          <label className="text-gray-400 text-[15px] flex items-center gap-2 semibolder">
            <input
              className="w-4 h-4"
              type="checkbox"
              name="checkbox3"
              required
              checked={individualChecks.checkbox3}
              onChange={handleIndividualCheck}
            />
            원티드 개인정보 수집 및 이용 동의 (필수)
          </label>

          <label className="text-gray-400 text-[15px] flex items-center gap-2 semibolder">
            <input
              className="w-4 h-4"
              type="checkbox"
              name="checkbox4"
              checked={individualChecks.checkbox4}
              onChange={handleIndividualCheck}
            />
            채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기
          </label>
        </div>
        <div className="flex justify-around items-center px-4 py-2">
          <button
            className="flex items-center gap-1"
            onClick={() => handleNotificationMethodChange("email")}
          >
            <AiOutlineCheck
              className={
                notificationMethods.email ? "text-primary" : "text-gray-400"
              }
            />
            <span
              className={
                notificationMethods.email ? "text-primary" : "text-gray-400"
              }
            >
              이메일
            </span>
          </button>

          <button
            className="flex items-center gap-1"
            onClick={() => handleNotificationMethodChange("appPush")}
          >
            <AiOutlineCheck
              className={
                notificationMethods.appPush ? "text-primary" : "text-gray-400"
              }
            />
            <span
              className={
                notificationMethods.appPush ? "text-primary" : "text-gray-400"
              }
            >
              앱 푸시
            </span>
          </button>

          <button
            className="flex items-center gap-1"
            onClick={() => handleNotificationMethodChange("textMessage")}
          >
            <AiOutlineCheck
              className={
                notificationMethods.textMessage
                  ? "text-primary"
                  : "text-gray-400"
              }
            />
            <span
              className={
                notificationMethods.textMessage
                  ? "text-primary"
                  : "text-gray-400"
              }
            >
              문자 메세지
            </span>
          </button>
        </div>
        <div className="sticky py-2 mb-1 pt-1 bottom-0 bg-white">
          <button className="w-full h-[50px] rounded-full bg-inActive text-inText ">
            가입하기
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
