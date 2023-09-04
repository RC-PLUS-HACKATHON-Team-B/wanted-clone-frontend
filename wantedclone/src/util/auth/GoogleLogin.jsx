import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

const iconClass = "w-[55px] h-[55px] p-3 rounded-full";
const textClass = "lighter text-center text-lightGray text-[12px]";
const containerClass = "flex flex-col p-4 gap-2";

function GoogleLogin() {
  const googleSocialLogin = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });

  return (
    <div className={containerClass} onClick={() => googleSocialLogin()}>
      <FcGoogle
        className={`${iconClass} bg-white border-[1px] border-gray-300`}
      />
      <span className={textClass}>Google</span>
    </div>
  );
}

export default GoogleLogin;
