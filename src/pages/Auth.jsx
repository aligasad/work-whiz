import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Auth() {
  let navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("logedin"));
    if (data) navigate("/");
  }, []);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Auth;
