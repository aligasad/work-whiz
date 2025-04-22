import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import asadImg from "../assets/asadpic.jpg";
import { IoMailUnreadSharp } from "react-icons/io5";


function About() {
  const members = [
    {
      name: "Asad Alam",
      title: "Computer Science Engineer",
      img: asadImg,
      link: "http://asadalam.info/",
      mail: "asadalam4291@gmail.com",
      description: "I design and develop experiences that make people's lives simpler through Web and Mobile apps. ",
      socials: {
        github: "https://github.com/aligasad",
        linkedin: "https://www.linkedin.com/in/asadalamalig/",
        twitter: "https://twitter.com/asadalam",
      },
    },
    {
      name: "Arshiya Akram",
      title: "Computer Science Engineer",
      img: "https://images.pexels.com/photos/1698730/pexels-photo-1698730.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "http://asadalam.info/",
      mail: "asadalam@gmail.com",
      socials: {
        github: "https://github.com/arshiyaakram",
        linkedin: "https://linkedin.com/in/arshiyaakram",
        twitter: "https://twitter.com/arshiyaakram",
      },
    },
    {
      name: "Amir Sohail",
      title: "Computer Science Engineer",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
      link: "http://asadalam.info/",
      mail: "asadalam@gmail.com",
      socials: {
        github: "https://github.com/amirsohail",
        linkedin: "https://linkedin.com/in/amirsohail",
        twitter: "https://twitter.com/amirsohail",
      },
    },
    {
      name: "Adiba Anwar",
      title: "Computer Science Engineer",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      link: "http://asadalam.info/",
      mail: "asadalam@gmail.com",
      socials: {
        github: "https://github.com/adibaanwar",
        linkedin: "https://linkedin.com/in/adibaanwar",
        twitter: "https://twitter.com/adibaanwar",
      },
    },
  ];

  return (
    <section className="w-full px-4 py-10 bg-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-15 text-blue-700">
        Team Members
      </h1>

      <div
        id="profileCard"
        className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-4 max-w-7xl mx-auto"
      >
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-xl p-4 text-center shadow relative">
            {/* Profile Image */}
            <img
              src={
                member.img || "https://randomuser.me/api/portraits/women/44.jpg"
              }
              alt={member.name || "User"}
              className="w-20 h-20 rounded-full mx-auto border-4 border-rose-800 shadow-md -mt-12 mb-2"
            />

            {/* Name and Username */}
            <h2 className="text-lg font-bold text-rose-800">
              {member.name || "Mae Shaw"}
            </h2>
            <p className="text-xs text-gray-600 mb-2">
             {member.mail || "maeshaw"}
            </p>

            {/* Description */}
            <p className="text-xs text-gray-700 mb-4 leading-snug">
              {member.description ||
                "If you like my work, consider supporting me on PayPal and help me make a dream come true."}
            </p>

            {/* Stats */}
            <div className="flex justify-between text-xs text-gray-700 font-medium mb-4">
              <div className="text-center">
                <p className="text-sm text-black font-bold">JavaScript</p>
                <p className="text-[11px] text-gray-500">Intermediate</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-black font-bold">React JS</p>
                <p className="text-[11px] text-gray-500">Intermediate</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-black font-bold">Java</p>
                <p className="text-[11px] text-gray-500">Basic</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 justify-center mb-4">
              <Link to={"https://www.instagram.com/wanderlust__026"}>
                <button className="bg-rose-800 text-white px-4 py-1.5 text-sm rounded-md hover:bg-gray-800">
                  Follow
                </button>
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 text-gray-600">
              <Link
              to={member.socials?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              >
                <FaGithub size={18} />
              </Link>
              <Link
              to={member.socials?.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
              to={member.socials?.twitter || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              >
                <FaTwitter size={18} />
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
