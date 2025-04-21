
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


function Auth() {
  let navigate = useNavigate();
  useEffect(()=>{
     const data = JSON.parse(localStorage.getItem("logedin"));
     if(data) navigate("/");
     
  },[])

  return (
    <Outlet></Outlet>
  )
}

export default Auth
