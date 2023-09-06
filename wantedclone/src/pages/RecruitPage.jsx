import { CiCircleChevDown } from "react-icons/ci";
import { BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";

function RecruitPage() {
  const [keyWord, setKeyWord] = useState([
    {
      title: "연봉이 최고의 복지 💰",
      color: "bg-[#F2FBF5]",
    },
    {
      title: "재택근무🏠",
      color: "bg-[#F3F9FE]",
    },
    {
      title: "퇴사율 10% 이하 🕹️",
      color: "bg-[#F3F2FB]",
    },
    {
      title: "급성장 중 📈",
      color: "bg-[#F6F8EE]",
    },
    {
      title: "병역특례👦🏻",
      color: "bg-[#F7F2F9]",
    },
    {
      title: "50인 이하 ⬇️",
      color: "bg-[#EEFAF9]",
    },
    {
      title: "50인 이상 ⬆️",
      color: "bg-[#EFF1FB]",
    },
    {
      title: "업력 5년 이상 🏢",
      color: "bg-[#F2FBF5]",
    },
    {
      title: "프론트엔드 🖥️",
      color: "bg-[#F3F9FE]",
    },
  ]);
  return (
    <section>
      <div className=" max-w-screen-lg mx-auto py-10 flex flex-col gap-[25px] ">
        <div className="flex items-center justify-between w-1/3 text-2xl">
          <h1 className="semibolder">전체</h1>
          <CiCircleChevDown size={28} />
          <span className="text-inText">|</span>
          <h2 className="text-gray-400 lighter">직군을 선택해주세요.</h2>
        </div>
        {/* 지역 경력 선택 */}
        <div className="flex items-center gap-[10px] lighter">
          <button className="flex items-center justify-between p-2 gap-4 border-[1px] rounded-lg text-[14px]">
            <span>지역</span>
            <span className="bolder text-primary">서울</span>
          </button>
          <button className="flex items-center justify-between p-2 gap-4 border-[1px] rounded-lg text-[14px]">
            <span>경력</span>
            <p className="flex items-center gap-2">
              <span className="bolder text-primary">서울</span>
            </p>
          </button>
          <button className="flex items-center justify-between p-2 gap-4 border-[1px] rounded-lg text-[14px]">
            <span>기술스택</span>
            <BiSolidDownArrow size={8} />
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-400 flex items-center gap-2" />
        {/* 키워드 버튼 */}
        <div className="flex items-center gap-2">
          {keyWord.map((word) => (
            <button
              className={`flex items-center border-[1px] justify-center text-[13px] rounded-full py-[8px] px-[14px] h-[32px] align-middle ${word.color} shrink-0`}
              key={word.title}
            >
              {word.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecruitPage;
