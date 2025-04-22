import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/main.jpg"; // <-- this is important

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const userDetail = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(userDetail);

  const navigate = useNavigate();

  const handleInput = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name == "" || data.email == "" || data.password == "") {
      alert("Please Enter Detail!");
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");

      let arr = [];
      arr = [...getData];

      const existingData = arr.find((item) => {
        return item.email === data.email;
      });

      if (existingData) {
        alert("You have already Singed Up");
        navigate("/auth/login")
      } else {
        arr.push(data);
        localStorage.setItem("user", JSON.stringify(arr));
        // localStorage.setItem("logedin", JSON.stringify(arr));
        alert("Signup Successfully !");
        navigate("/auth/login");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      {/* Form Section */}
      <div className="w-full md:w-1/2 max-w-md bg-white p-8 mb-7 rounded-2xl shadow-2xl">
        {/* Brand */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-blue-700 tracking-wider">
            <span className="text-gray-800">Work</span>
            <span className="text-blue-600">Whiz</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Join us to power up your productivity.
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            onChange={handleInput}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
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

          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>

      <div className="grid place-items-center gap-3">
        {/* Intro Description */}
        <div className="text-center mb-6 w-full md:w-1/2">
          <h3 className="text-xl font-bold text-blue-600 mb-2">
            Find Workers Near You Instantly
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="text-rose-600 font-semibold">WorkWhiz</span> connects you with local workers when you need them, where
            you need them.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether it's a short-term task or an urgent need, we make hiring
            effortless and fast.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={Img}
            alt="Sign Up Illustration"
            className="w-96 max-w-sm object-contain rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
