import {
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from '../assets/logo1.svg'

function Footer() {
  return (
    <footer className="bg-[#0D1B1E] text-[#D7CBA4] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-baseline gap-2  "> <img src={logo} className=" h-[3rem] mr-1 " alt="" /> Get in Touch</h2>
          <p className="text-gray-400 mb-2">
          WorkWhiz connects you with local workers when you need them, where you need them. 
          </p>
          <p className="text-gray-400 mb-4">
          Whether it's a short-term task or an urgent need, we make hiring effortless and fast.
          </p>
          <div className="flex gap-3 justify-center md:justify-start mt-4">
            <Link to={"https://www.instagram.com/wanderlust__026"} className="bg-[#D7CBA4] text-black p-2 rounded">
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/asadalamalig/"}
              className="bg-[#D7CBA4] text-black p-2 rounded"
            >
              <FaLinkedin />
            </Link>

            <Link to={"#"} className="bg-[#D7CBA4] text-black p-2 rounded">
              <FaPinterest />
            </Link>
            <Link to={"#"} className="bg-[#D7CBA4] text-black p-2 rounded">
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="bg-[#13272A] p-6 rounded-xl shadow-lg w-64 text-center transition-transform duration-300 hover:scale-105">
            <FaGithub className="text-[#D7CBA4] text-3xl mb-3 mx-auto" />
            <a
              href="https://github.com/aligasad"
              className="text-white hover:underline"
            >
              github.com/aligasad
            </a>
          </div>
          <div className="bg-[#13272A] p-6 rounded-xl shadow-lg w-64 text-center transition-transform duration-300 hover:scale-105">
            <HiOutlineMail className="text-[#D7CBA4] text-3xl mb-3 mx-auto" />
            <a
              href="mailto:asadalam4291@gmail.com"
              className="text-white hover:underline"
            >
              asadalam4291@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
