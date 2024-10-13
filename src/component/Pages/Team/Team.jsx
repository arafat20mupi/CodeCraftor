import React from "react";
import { TbMathGreater } from "react-icons/tb";
import Teamgoals from "../../../assets/images/team/teamgoals.svg";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Rafel from "../../../assets/images/team/Rafel.jpg";
import Arafat from "../../../assets/images/team/Arafat.jpg";
import Nirob from "../../../assets/images/team/Nirob.png";
import Nazmin from "../../../assets/images/team/Nazmin.png";
import Alpona from '../../../assets/images/team/Alpona.jpeg'
import ShahNawaz from '../../../assets/images/team/ShahNawaz.jpeg'
import Tanjim from '../../../assets/images/team/Tanjim.png'
import Hazrat from '../../../assets/images/team/Hojrat.jpg'

const Team = () => {
  const Members = [
    {
      name: 'Arafat Islam',
      designation: "CEO & Web Developer",
      image: Arafat,
      FBLink: 'https://www.facebook.com/arafatislamsani169',
      linkedInLink: 'https://www.linkedin.com/in/arafatislam03',
      githubLink: 'https://github.com/arafat20mupi'
    },
    {
      name: 'Saiful Islam Rafel',
      designation: "COO & Web Developer",
      image: Rafel,
      FBLink: 'https://www.facebook.com/mdsaifulislamrafel',
      linkedInLink: 'https://www.linkedin.com/in/mdsaifulislamrafel',
      githubLink: 'https://github.com/mdsaifulislamrafel'
    },
    {
      name: 'Abdullah Al Nirob',
      designation: "Web Developer & Marketer",
      image: Nirob,
      FBLink: 'https://www.facebook.com/dev.abdullahalnirob',
      linkedInLink: 'https://www.linkedin.com/in/abdullah-al-nirob-096994295',
      githubLink: 'https://github.com/abdullahalnirob'
    },
    {
      name: 'Nazmin Akter Noor',
      designation: "Web Developer & Marketer",
      image: Nazmin,
      FBLink: 'https://www.facebook.com/nazmin.noor13',
      linkedInLink: 'https://www.linkedin.com/in/nazmin-akter-noor',
      githubLink: 'https://github.com/NazminNoor',
    },
    {
      name: 'Afiya Akter Alpona',
      designation: "Digital Marketer",
      image: Alpona,
      FBLink: 'https://www.facebook.com/profile.php?id=100064763745732',
      linkedInLink: 'https://www.linkedin.com',
      githubLink: 'https://github.com',
    },
    {
      name: 'Shah Nawaz',
      designation: "Web Developer",
      image: ShahNawaz,
      FBLink: 'https://www.facebook.com/snh.sabbir',
      linkedInLink: 'https://www.linkedin.com/in/shah-nawaz-haque',
      githubLink: 'https://github.com/snh-sabbir'
    },
    {
      name: 'Tanjim Ahemed Chowdhury',
      designation: "Web Developer",
      image: Tanjim,
      FBLink: 'https://www.facebook.com/tanjim.ahmedchowdhury.12',
      linkedInLink: 'https://www.linkedin.com/in/tanjim-ahemed-chowdhury-436b1932b/',
      githubLink: 'https://github.com/tanjimN4'
    },
    {
      name: 'Md Hazrat Ali',
      designation: "Web Developer",
      image: Hazrat,
      FBLink: 'https://www.facebook.com/mdhazratali.hazrat.000000',
      linkedInLink: 'https://www.linkedin.com/in',
      githubLink: 'https://github.com/Md-Hazrat'
    },
  ];

  return (
    <div className="overflow-x-hidden py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]">
      <div className="container">
        <h1
          className="text-5xl text-center font-bold text-gray-800 my-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Our Team Members
        </h1>
        <div className="bg-slate-100 py-2 px-4 ring-1 ring-gray-300 w-[max-content] rounded-xl justify-center flex items-center mx-auto">
          <h1 className="text-black justify-center flex items-center">
            <span className="text-[#afafaf]">CodeCraftor</span>{ " "}
            <TbMathGreater className="mx-2" /> Our Team Members
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={Teamgoals}
            className="w-[60%] md:w-[40%]"
            alt="Team goals representation"
          />
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:text-xl text-[#173282]"
          >
            CodeCraftor is a one-stop digital solutions company offering expert web development, SEO, digital marketing, and UI/UX design services. Our skilled team crafts custom websites and applications while optimizing for search engines and delivering engaging user experiences. We help businesses grow with tailored marketing strategies and comprehensive digital support.
          </p>
        </div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-800 rounded-md">
          <div className="p-4 mx-auto space-y-16 sm:p-10">
            <div className="space-y-4">
              <h3
                className="text-2xl font-bold leading-none sm:text-5xl"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Meet our team
              </h3>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                className="max-w-2xl dark:text-gray-600"
              >
                We are a team of passionate developers and creative thinkers,
                constantly pushing boundaries to deliver the best for our
                clients.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
              {Members.map((member) => (
                <div key={member.name} className="space-y-4 shadow-md p-4 rounded-md">
                  <img
                    alt={member.name}
                    className="object-cover ring-1 ring-[#ccc] h-72 w-64 mx-auto mb-4 bg-center rounded-sm"
                    src={member.image}
                  />
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-semibold">{member.name}</h4>
                    <p className="text-sm dark:text-gray-600">
                      {member.designation}
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 text-gray-700">
                    <a href={member.FBLink} target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a href={member.linkedInLink} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href={member.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
