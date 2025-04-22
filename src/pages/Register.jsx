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

    const existingData = workers.find((obj)=>{
      return workers.concat !== newWorker.contact
    })
    if(!existingData){
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
    } else{
      alert("You have already registered");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register to be a part of the WorkWhiz world.</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "role", "contact", "area", "city", "profilePicture"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-6">Registered Workers</h3>
      <ul className="mt-2 space-y-2">
        {workers.map((worker) => (
          <li key={worker.id} className="border p-4 rounded shadow">
            <div className="flex items-center space-x-4">
              <img
                src={worker.profilePicture}
                alt={worker.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">{worker.name}</p>
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
  );
};

export default RegisterWorker;
