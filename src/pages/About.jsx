import { Link } from "react-router-dom";
import asadImg from "../assets/asadpic.jpg";

function About() {
  const members = [
    {
      name: "Asad Alam",
      title: "Computer Science Engineer",
      img: asadImg,
      link: "http://asadalam.info/",
    },
    {
      name: "Arshiya Akram",
      title: "Computer Science Engineer",
      img: "https://images.pexels.com/photos/1698730/pexels-photo-1698730.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "http://asadalam.info/",
    },
    {
      name: "Amir Sohail",
      title: "Computer Science Engineer",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
      link: "http://asadalam.info/",
    },
    {
      name: "Adiba Anwar",
      title: "Computer Science Engineer",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      link: "http://asadalam.info/",
    },
  ];

  return (
    <section className="w-full px-4 py-10 bg-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-rose-800">Team Leader</h1>

      <div id="profileCard" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <div id="card"
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col overflow-hidden items-center text-center transition-transform hover:scale-105 duration-300"
          >
            {/* <div className="p1"></div>
            <div className="p2"></div>
            <div className="p3"></div> */}
            <img
              src={member.img}
              alt={member.name} 
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-rose-800"
            />
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <h3 className="text-sm text-gray-600 mb-2">{member.title}</h3>
            <ul className="text-sm text-gray-700 space-y-1 text-start ">
              <li>JavaScript</li>
              <li>React</li>
              <li>Java</li>
              <li>
                <Link
                  to={member.link}
                  className="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                >
                  Visit
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

