import { BiSolidPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";

import { Link } from "react-router-dom";
function Card({ worker }) {
  return (
    // <div id="card">
    //   <Link to={`tel:+91${worker.contact}`}> <button> <BiSolidPhoneCall/> </button> </Link>
    //   <Link to={`https://wa.me/91${worker.contact}/`} target="_blank" > <div id="wapp"><FaWhatsapp /></div> </Link>
      
    //   <div className="image">
    //     <img src={worker.profilePicture} alt="" />
    //     <h2>{worker.name}</h2>
    //   </div>
    //   <div className="details">
        
    //     <ul>
    //       <li><span>Role:</span> {worker.role}</li>
    //       <li><span>Area:</span> {worker.area}</li>
    //       <li><span>Contact:</span> {worker.contact}</li>
    //     </ul>
    //   </div>
    // </div>

    <div
    id="card"
    className="bg-gradient-to-br from-white via-blue-200 to-blue-100 shadow-xl rounded-2xl p-5 w-full max-w-xs sm:max-w-sm flex flex-col items-center space-y-4 transition-transform hover:scale-105 overflow-hidden"
  >
    {/* Contact Buttons */}
    <div className="flex justify-between w-full px-2">
      <Link to={`tel:+91${worker.contact}`}>
        <button className="bg-green-500 text-white p-2 rounded-full hover:scale-110 hover:bg-green-600 transition-transform duration-200 shadow">
          <BiSolidPhoneCall size={20} />
        </button>
      </Link>
      <Link to={`https://wa.me/91${worker.contact}/`} target="_blank">
        <div className="bg-emerald-600 text-white p-2 rounded-full hover:scale-110 hover:bg-emerald-700 transition-transform duration-200 shadow">
          <FaWhatsapp size={20} />
        </div>
      </Link>
    </div>
  
    {/* Profile Image with Gradient Border */}
    <div className="relative w-30 h-30 rounded-full bg-gradient-to-br from-blue-400 via-pink-400 to-purple-500 p-[3px]">
      <img
        src={worker.profilePicture}
        alt={`${worker.name}`}
        className="w-full h-full object-cover rounded-full border-4 border-white"
      />
    </div>
  
    {/* Name */}
    <h2 className="text-lg font-bold text-gray-800 truncate w-full text-center px-2">{worker.name}</h2>
  
    {/* Details */}
    <div className="text-sm text-gray-700 w-full px-2">
      <ul className="space-y-1 break-words">
        <li>
          <span className="font-semibold text-gray-800">Role:</span>{" "}
          <span className="inline-block max-w-full truncate">{worker.role}</span>
        </li>
        <li>
          <span className="font-semibold text-gray-800">Area:</span>{" "}
          <span className="inline-block max-w-full truncate">{worker.area}</span>
        </li>
        <li>
          <span className="font-semibold text-gray-800">Contact:</span>{" "}
          <span className="inline-block max-w-full break-words">{worker.contact}</span>
        </li>
      </ul>
    </div>
  </div>
  

  );
}

export default Card;
