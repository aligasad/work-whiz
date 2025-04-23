import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const RegisterWorker = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    contact: "",
    area: "",
    city: "",
    profilePicture: "",
  });

  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const storedWorkers = JSON.parse(localStorage.getItem("workers")) || [];
    setWorkers(storedWorkers);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorker = {
      id: uuidv4(),
      ...formData,
    };

    const existingData = workers.find((obj) => {
      return workers.concat !== newWorker.contact;
    });
    if (!existingData) {
      const updatedWorkers = [...workers, newWorker];
      localStorage.setItem("workers", JSON.stringify(updatedWorkers));
      setWorkers(updatedWorkers);
      setFormData({
        name: "",
        role: "",
        contact: "",
        area: "",
        city: "",
        profilePicture: "",
      });
    } else {
      alert("You have already registered");
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-200 p-6 md:px-20 pt-30 bg-gray-50 min-h-screen">
      {/* Container: responsive flex with column on mobile and row on medium screens and up */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side - Form + Workers List */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full lg:w-1/3 space-y-6">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-blue-800">
            {" "}
            Join us to power up your productivity.
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "role", "contact", "area", "city", "profilePicture"].map(
              (field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              )
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register
            </button>
          </form>

          {/* Registered Workers List */}
          <div>
            <h3 className="text-xl font-semibold text-rose-600 mb-4">
              Registered Workers
            </h3>
            <ul className="space-y-4 max-h-80 overflow-y-auto">
              {workers.map((worker) => (
                <li
                  key={worker.id}
                  className="border p-4 rounded-lg shadow-sm bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={worker.profilePicture}
                      alt={worker.name}
                      className="w-14 h-14 rounded-full object-cover border"
                    />
                    <div>
                      <p className="font-bold text-lg">{worker.name}</p>
                      <p className="text-sm text-gray-600">
                        {worker.role}, {worker.area}, {worker.city}
                      </p>
                      <p className="text-sm">📞 {worker.contact}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Rules Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full lg:w-2/3">
          <h1 className="text-2xl font-bold text-blue-800 mb-4 underline decoration-2">
            Guidelines for Joining the WorkWhiz Community
          </h1>
          <ul className=" space-y-4 text-gray-700">
            <li>
              <strong className=" text-rose-600 ">Be Honest with Your Skills:</strong> Only list services
              and skills you are qualified to provide. Honesty builds trust and
              repeat work.
            </li>
            <li>
              <strong className=" text-rose-600 ">Punctuality is a Must:</strong> Always be on time for
              every job. If you're running late, inform the client as early as
              possible.
            </li>
            <li>
              <strong className=" text-rose-600 ">Respect Every Client:</strong> Treat clients and their
              homes with the utmost respect—polite behavior goes a long way.
            </li>
            <li>
              <strong className=" text-rose-600 ">Pricing Transparency:</strong> Be clear and upfront about
              your rates. No hidden fees or surprise charges after the work is
              done.
            </li>
            <li>
              <strong className=" text-rose-600 ">Maintain Cleanliness:</strong> Leave the worksite clean
              and organized after the job is completed. First impressions
              matter.
            </li>
            <li>
              <strong className=" text-rose-600 ">Report Problems Promptly:</strong> If any issue arises
              during a job, report it immediately through the WorkWhiz platform.
            </li>
            <li>
              <strong className=" text-rose-600 ">Uphold WorkWhiz's Reputation:</strong> You represent our
              platform. Keep your communication professional, and always aim to
              exceed expectations.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterWorker;
