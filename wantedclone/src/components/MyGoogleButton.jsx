import { GoogleLogin } from "@react-oauth/google";
import { useRef } from "react";

export default function MyGoogleButton() {
  const googleLoginRef = useRef();

  const onSuccess = (response) => {
    console.log("Success:", response);
  };

  const onFailure = (response) => {
    console.log("Failure:", response);
  };

  const triggerGoogleLogin = () => {
    googleLoginRef.current.click();
  };

  return (
    <div>
      <button onClick={triggerGoogleLogin}>Login with Google</button>

      <div style={{ display: "none" }}>
        <GoogleLogin
          ref={googleLoginRef}
          clientId="941801421178-0b8des5e4usca0hh7nuhr6qesnts8cll.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>
    </div>
  );
}
