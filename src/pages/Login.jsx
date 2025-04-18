import React from "react";
import { Link } from "react-router-dom";
import asadImg from "../assets/asadpic.jpg"; // <-- this is important

function Login() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 h-screen" id="About">
      <div className="h-83 w-62 p-6" id="profileCard">
        <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div>
        <div className="flex justify-center">
          <img src={asadImg} alt="Asad Alam" className="rounded-full w-40 h-40 object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-center mt-2.5">Asad Alam</h1>
        <ul className="text-center mt-2">
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>
            <Link to="http://asadalam.info/">Visit</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
