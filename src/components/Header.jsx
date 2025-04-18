import { GrUserWorker } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-18  w-full flex justify-between items-center lg: px-10  bg-rose-400 ">
      <h1 className="text-1xl ml-2 sm:text-2xl lg:text-3xl  font-bold flex gap-2"><GrUserWorker className="text-3xl text-amber-800" /> WorkViz</h1>
      <ul className="flex items-center">
        <li className="mr-4 cursor-pointer text-xl text-white font-bold"><Link to={"/"}>Home</Link></li>
        <li className="mr-4 cursor-pointer text-xl text-white font-bold"><Link to={"/about"}>About</Link></li>
        
        <li className="mr-4 cursor-pointer ">
          <Link to={"/login"}><BsFillPersonFill title="Your Account" className="text-3xl" /></Link>
        </li>
      </ul>
    </header>

  );
}

export default Header;