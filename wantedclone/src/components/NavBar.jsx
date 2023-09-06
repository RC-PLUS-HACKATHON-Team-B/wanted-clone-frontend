import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [selectedNav, setSelectedNav] = useState(""); // 선택된 항목을 추적하는 상태
  const navList = [
    "채용",
    "이벤트",
    "이력서",
    "소셜",
    "프리랜서",
    "AI 합격예측",
  ];
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate("/recruit");
    setSelectedNav(name);
  };
  return (
    <section className="flex items-center h-[50px] justify-between border-b-[1.5px] py-4">
      <div className="flex justify-between items-center max-w-screen-lg w-full mx-auto">
        <div className="h-[25px] flex items-center gap-2 ">
          <FiMenu className="" />
          <img
            className="w-[72px] h-[25px] object-contain"
            src="images/wanted.png"
            alt="logo"
          />
        </div>
        <ul className="flex text-sm gap">
          {navList.map((name) => (
            <li
              className={`p-[15px] py-[12px] cursor-pointer border-b-2 transition-all ease-in-out ${
                selectedNav === name ? " border-primary" : "border-transparent"
              }`}
              key={name}
              onClick={() => handleClick(name)}
            >
              {name}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <AiOutlineSearch />
          <span className="text-[14px] px-[10px]">회원가입/로그인</span>
          <span className="text-[9px] text-gray-400">|</span>
          <button className="rounded-full border-[1px] text-[13px]  border-[#e1e2e4] px-[10px] py-1">
            기업 서비스
          </button>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
