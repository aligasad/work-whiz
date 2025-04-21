import { GrUserWorker } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";


function Header() {
  const name = JSON.parse(localStorage.getItem("logedin"));

  const [username, setUsername] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setUsername(name);
  }, [name]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    localStorage.removeItem("logedin");
    navigate("/auth/login");
  };

  return (
    <header className="bg-[#0D1B1E] px-4 py-5 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex items-center gap-2 text-white font-bold text-xl sm:text-2xl"
        >
          <GrUserWorker className="text-3xl" />
          WorkWhiz
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl lg:hidden focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <Link to="/" className="text-white text-lg hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-white text-lg hover:underline">
              Register
            </Link>
          </li>
          <li>
            <Link to="/chart" className="text-white text-lg hover:underline">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/about" className="text-white text-lg hover:underline">
              About
            </Link>
          </li>
          <li
            className="flex items-center gap-1 text-[#FFE4B5] font-bold text-lg hover:text-blue-400 transition-all duration-300 cursor-pointer"
            onClick={logout}
          >
            <RiLogoutBoxRLine className="text-2xl" title="Your Account" />
            {username}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden mt-4 space-y-3 text-end ">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="block text-white text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              onClick={toggleMenu}
              className="block text-white text-lg"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/chart"
              onClick={toggleMenu}
              className="block text-white text-lg"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block text-white text-lg"
            >
              About
            </Link>
          </li>
          <li
            className="flex justify-center items-center gap-1 text-[#FFE4B5] font-bold text-lg hover:text-blue-400 transition-all duration-300 cursor-pointer"
            onClick={() => {
              logout();
              toggleMenu();
            }}
          >
            <RiLogoutBoxRLine className="text-2xl" />
            {username}
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
