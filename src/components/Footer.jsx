import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-rose-400 py-2 px-12 text-center">
      <p>&copy; {new Date().getFullYear()} | Ecommerce</p>
      <p>
        Made with <FaHeart className="inline-block" /> by
        <Link
          className="text-blue-700 underline ps-2"
          target="_blank"
          to={"https://asadalam.info/"}
        >Asad Alam</Link>
      </p>
    </footer>
  );
}

export default Footer;
