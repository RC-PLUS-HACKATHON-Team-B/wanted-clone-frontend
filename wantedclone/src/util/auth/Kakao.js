const Rest_api_key = "c2a7db4709b5d57490010f394169e0a7"; //REST API KEY
const redirect_uri = "http://localhost:5173/redirect";
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
export const KakaoLogin = () => {
  window.location.href = kakaoURL;
};
