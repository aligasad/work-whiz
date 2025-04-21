import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function First() {
  let navigate = useNavigate();
  useEffect(()=>{
       const data = JSON.parse(localStorage.getItem("user"));
       
       if(!data) navigate("/auth");
    },[])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default First
