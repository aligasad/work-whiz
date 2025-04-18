import { BiSolidPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";

import { Link } from "react-router-dom";
function Card({ worker }) {
  return (
    <div id="card">
      <Link to={`tel:+91${worker.contact}`}> <button> <BiSolidPhoneCall/> </button> </Link>
      <Link to={`https://wa.me/91${worker.contact}/`} target="_blank" > <div id="wapp"><FaWhatsapp /></div> </Link>
      
      <div className="image">
        <img src={worker.profilePicture} alt="" />
        <h2>{worker.name}</h2>
      </div>
      <div className="details">
        
        <ul>
          <li><span>Role:</span> {worker.role}</li>
          <li><span>Area:</span> {worker.area}</li>
          <li><span>Contact:</span> {worker.contact}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
