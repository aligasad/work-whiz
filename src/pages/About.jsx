import { Link } from "react-router-dom";
import asadImg from "../assets/asadpic.jpg"; // <-- this is important

function About() {
  return (
    <>
    <h1 className="top">Team Leader</h1> 
    <div
      className="flex flex-wrap justify-center items-center gap-8 h-screen"
      id="About"
    >
      
      <div className="h-83 w-62 py-6 px-4" id="profileCard">
        <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div>{" "}
        <div className="flex justify-center ">
          <img src={asadImg} alt="" />
        </div>
        <h1 className="text-2xl font-bold text-center mt-2.5">Asad Alam</h1>
        <h3>Computer Science Engineer</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>
            <Link to={"http://asadalam.info/"}>Visit</Link>
          </li>
        </ul>
      </div>
      <div className="h-83 w-62 py-6 px-4" id="profileCard">
        <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div>
        <div className="flex justify-center  ">
          <img src={"asadpic.jpg"} alt="" />
        </div>
        <h1 className="text-2xl font-bold text-center mt-2.5">Arshiya Akram</h1>
        <h3>Computer Science Engineer</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>
            <Link to={"http://asadalam.info/"}>Visit</Link>
          </li>
        </ul>
      </div>
      <div className="h-83 w-62 py-6 px-4" id="profileCard">
        <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div>{" "}
        <div className="flex justify-center ">
          <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="" />
        </div>
        <h1 className="text-2xl font-bold text-center mt-2.5">Amir Sohail</h1>
        <h3>Computer Science Engineer</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>
            <Link to={"http://asadalam.info/"}>Visit</Link>
          </li>
        </ul>
      </div>
      <div className="h-83 w-62 py-6 px-4" id="profileCard">
        <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div>{" "}
        <div className="flex justify-center ">
          <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="" />
        </div>
        <h1 className="text-2xl font-bold text-center mt-2.5">Adiba Anwar</h1>
        <h3>Computer Science Engineer</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>
            <Link to={"http://asadalam.info/"}>Visit</Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default About;
