import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-rose-800 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left - Text & Credits */}
        <div className="text-center md:text-left text-sm">
          <p>&copy; {new Date().getFullYear()} | Workwhiz</p>
          <p>
            Made with <FaHeart className="inline-block text-red-400" /> by{" "}
            <Link
              className="underline text-white"
              target="_blank"
              to="https://asadalam.info/"
            >
              Asad Alam
            </Link>
          </p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4 justify-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaFacebook className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
