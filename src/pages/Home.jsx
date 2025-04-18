import { useCallback, useEffect, useState } from "react";
import { workers } from "../assets/data";
import Card from "../components/Card";
import Pills from "../components/Pills";

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
      workers[city]?.filter((w) => w.area == area).map((w) => w.role)
    );
    setFilterdDataRole([...roles]);

    setFilterdData(
      workers[city]
        ?.filter((w) => w.area == area)
        .filter((w) => w.role == currentRole)
    );
  }, [area, city, currentRole]);

  useEffect(() => filterdata(), [city, area, currentRole]);

  return (
    <>
    <section className="bg-white max-w-lg p-4 mx-auto min-h-screen" id="HomePage">
      
      <h1 className="text-center text-2xl font-bold mb-4 " id="header">
        Find a Craftsmen near by you.
      </h1>

      <section className="grid gap-4">
        <div className="grid gap-1">
          <label htmlFor="city">Select a City where you need helper</label>
          <select
            onChange={(e) => setCity(e.target.value)}
            defaultValue="select city"
            id="city"
          >
            <option value="select city"  disabled>Select</option>
            {Object.keys(workers).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {city && (
          <div className="grid gap-1">
            <label htmlFor="city" select disabled>Select Area</label>
            <select
              id="city"
              onChange={(e) => setArea(e.target.value)}
              defaultValue="select-area"
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

        {area && (
          <div id="pillsBox" className="flex gap-4 overflow-auto capitalize">
            {filterdDataRole.map((role) => (
              <Pills
                key={role}
                role={role}
                currentRole={currentRole}
                setCurrentRole={setCurrentRole}
              />
            ))}
          </div>
        )}

        {currentRole && (
          <div className="grid grid-cols-2 justify-items-center">
            {filterdData.map((w) => (
              <Card key={w.id} worker={w} />
            ))}
          </div>
        )}
      </section>
    </section>
    </>
  );
}

export default Home;
