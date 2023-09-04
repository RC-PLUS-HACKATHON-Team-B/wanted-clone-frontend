const NAVER_CLIENT_ID = "UUsMrMqi7ChdnbJ2EHZ_";
const REDIRECT_URL = "http://localhost:5173/redirect";
const STATE = "false";
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URL}`;
export const NaverLogin = () => {
  window.location.href = NAVER_AUTH_URL;
};
