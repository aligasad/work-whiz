import { useCallback, useEffect, useState } from "react";
import { workers } from "../assets/data";
import Card from "../components/Card";
import Pills from "../components/Pills";
import { Link } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [filterdDataRole, setFilterdDataRole] = useState([]); 
  const [filterdDataArea, setFilterdDataArea] = useState([]);
  const [filterdData, setFilterdData] = useState([]);

  const filterdata = useCallback(() => {
    let areaList = new Set(workers[city]?.map((w) => w.area));
    setFilterdDataArea([...areaList]);

    let roles = new Set(
      workers[city]?.filter((w) => w.area === area).map((w) => w.role)
    );
    setFilterdDataRole([...roles]);

    setFilterdData(
      workers[city]
        ?.filter((w) => w.area === area)
        .filter((w) => w.role === currentRole)
    );
  }, [area, city, currentRole]);

  useEffect(() => filterdata(), [city, area, currentRole]);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-10 px-4 sm:px-6 lg:px-8" id="HomePage">
      <div className="max-w-5xl mx-auto">
        {/* Chart Button */}
        <div className="fixed bottom-6 left-6">
          <Link to="/chart">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow hover:bg-blue-700 transition-all duration-300">
              📊 Show Chart
            </button>
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-center text-4xl font-extrabold text-blue-800 mb-10 mt-16">
          Find a <span className=" text-[#DC143C] ">Craftsman</span> Near You
        </h1>

        {/* Form Section */}
        <div className="grid gap-6 bg-white rounded-2xl shadow-lg p-6">

          {/* City Select */}
          <div className="grid gap-2">
            <label htmlFor="city" className="text-sm font-semibold text-gray-700">
              🏙️ Select a City where you need helper
            </label>
            <select
              onChange={(e) => setCity(e.target.value)}
              defaultValue="select city"
              id="city"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="select city" disabled>Select</option>
              {Object.keys(workers).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Area Select */}
          {city && (
            <div className="grid gap-2">
              <label htmlFor="area" className="text-sm font-semibold text-gray-700">
                🧭 Select Area
              </label>
              <select
                id="area"
                onChange={(e) => setArea(e.target.value)}
                defaultValue="select-area"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="select-area">Select</option>
                {filterdDataArea.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Select Role */}
          {area && filterdDataRole.length > 0 && (
  <div className="grid gap-2">
    <label htmlFor="role" className="text-sm font-semibold text-gray-700">
      🎯 Select Role
    </label>
    <select
      id="role"
      onChange={(e) => setCurrentRole(e.target.value)}
      defaultValue="select-role"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="select-role">Select</option>
      {filterdDataRole.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  </div>
)}
          {/* Workers Cards */}
          {currentRole && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 justify-items-center">
              {filterdData.map((w) => (
                <Card key={w.id} worker={w} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;