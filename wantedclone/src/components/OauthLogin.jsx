import { SiNaver } from "react-icons/si";
import { BiSolidMessageRounded } from "react-icons/bi";
import { KakaoLogin } from "../util/auth/Kakao";
import GoogleLoginBtn from "../util/auth/GoogleLogin";

const iconClass = "w-[55px] h-[55px] p-3 rounded-full";
const textClass = "lighter text-center text-lightGray text-[12px]";
const containerClass = "flex flex-col p-4 gap-2";

function OauthLogin() {
  return (
    <div className="flex items-center justify-center gap-4">
      <OauthLoginButton
        Icon={SiNaver}
        bgColor="bg-green-500"
        textColor="text-white"
        label="naver"
      />
      <OauthLoginButton
        Icon={BiSolidMessageRounded}
        bgColor="bg-[#FEE500]"
        textColor=""
        label="Kakao"
      />
      <GoogleLoginBtn />
    </div>
  );
}

export default OauthLogin;

const OauthLoginButton = ({ Icon, bgColor, textColor, label }) => {
  return (
    <div className={containerClass} onClick={KakaoLogin}>
      <Icon className={`${iconClass} ${bgColor} ${textColor}`} />
      <span className={textClass}>{label}</span>
    </div>
  );
};
