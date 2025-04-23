import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/main.jpg"; // <-- this is important

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  useEffect(()=>{
    getLoginUsers();
  },[]);

  function getLoginUsers() {
    axios.get('http://localhost/login/user/save/', inputData).then(function(response){
      console.log(response.data);
    })
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const loginDetails = {
    username: "",
    password: "",
  }
  const [inputData, setInputData] = useState(loginDetails);

  

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // for Backend------------
    setInputData({ ...inputData, [name]: value });
    // for LocalStorage
    if ("username" == name) {
      setUsername(value);
    }
    if ("password" == name) {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (username === "" || password === "") {
      alert("Please Enter Details!");
    } 
    else {
      const getDetails = JSON.parse(localStorage.getItem("user")) || [];
  
      const foundUser = getDetails.find(
        (user) => user.username === username && user.password === password
      );
  
      if (foundUser) {
        alert("Login Successfully !");
        localStorage.setItem("logedin", JSON.stringify(foundUser.name));

        // FOR SENDING DATA TO SERVER-------------------------------
        // axios.post('http://localhost/login/user/save/', inputData);
        navigate("/");
      } else {
        alert("Invalid Email or Password!");
      }
    }
  };
  
  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
      {/* Head Tags - If using in a full HTML file, move this into <head> */}
      <title>WorkWhiz | Login</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="description" content="Login to your WorkWhiz account to manage your workflow efficiently." />

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        {/* Company Name */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide">
            <span className="text-gray-800">Work</span>
            <span className="text-blue-600">Whiz</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Please log in to continue.</p>
        </div>

        {/* Error Message */}
        {msg && (
          <p className="mb-4 text-sm text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md">
            {msg}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleInput}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={handleInput}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Log In
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/auth" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
