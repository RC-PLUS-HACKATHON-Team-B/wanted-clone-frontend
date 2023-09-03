import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectURL() {
  const navigate = useNavigate();
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
  }, []);
  return <div>RedirectURL</div>;
}

export default RedirectURL;
