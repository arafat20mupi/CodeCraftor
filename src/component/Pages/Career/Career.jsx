import React from "react";
import { TbMathGreater } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import Contact from "../Contact/Contact";
import {FaMapMarkerAlt} from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link} from "react-router-dom";
const Career = () => {
  let Officeimg =
    "https://imgs.search.brave.com/uXL7zMEyso-WIBTfzhwp53XTN9veLaD4ymsO7U6Nfvo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk4/MzIzMjUxL3Bob3Rv/L2NvbGxlYWd1ZXMt/ZGlzY3Vzc2luZy1v/dmVyLWRpZ2l0YWwt/dGFibGV0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ETnZ5/bDl2RGU2c1JZNzZj/dUdkYXllMXVucl9G/NDhHS1J0bTJGQjh0/aElJPQ";
  return (
    <div className="overflow-x-hidden py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]">
      <div className="conatainer mx-auto">
        <h1
          className="text-5xl text-center font-bold text-gray-800 my-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Current Open Positions
        </h1>
        <div className="bg-slate-100 py-2 px-4 ring-1 ring-gray-300 w-[max-content] rounded-xl justify-center flex items-center mx-auto">
          <h1 className="text-black justify-center flex items-center">
            <span className="text-[#afafaf]">CodeCraftor</span>{" "}
            <TbMathGreater className="mx-2" /> Current Open Positions
          </h1>
        </div>
        <div className="flex space-x-3 md:space-x-7 my-20 items-center justify-center">
          <select
            id="cars"
            className="px-5 py-[15px] w-[200%] md:w-2/5 ring-slate-400 ring-2 rounded outline-[#1891C8]"
          >
            <option value="volvo">Select your skill</option>
            <option value="saab">Front-end Developer(Web)</option>
            <option value="opel">Back-end Developer(Web/App)</option>
            <option value="audi">
              App Developer(Flutter/java/Kotlin/Native)
            </option>
            <option value="audi">Digital Marketer & SEO Expert</option>
            <option value="audi">Graphics Designer</option>
            <option value="audi">Video Editor</option>
            <option value="audi">Content Writter</option>
            <option value="audi">WordPress Developer</option>
            <option value="audi">PHP,Laravel Developer</option>
          </select>
          <input
            type="text"
            className="px-5 py-[11.7px] md:py-[12.5px] w-[200%] md:w-2/5 ring-slate-400 ring-2 rounded outline-[#1891C8]"
            placeholder="Search Careers"
          />
          <IoSearchSharp className="relative right-16 text-2xl text-gray-400" />
        </div>
        <div className="bg-slate-100 shadow-xl rounded-xl p-5  ring-[#e2e2e2] ring-1 flex justify-between flex-col md:flex-row items-center px-10">
          <div className="">
            <h1 className="text-3xl font-bold">Apply for jobs</h1>
            <p className="my-4">3/5 years of minimum experience needed.</p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mx-1" />
              Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <Link to={'/apply'}>
            <button className="w-full md:w-[unset] bg-blue-700 md:bg-[transparent] px-10 md:px-0 py-3 md:py-0 mt-5  rounded text-white md:text-black flex items-center hover:bg-blue-500 md:hover:text-[#183282] md:hover:bg-transparent">
              Apply now
             <FaLongArrowAltRight className=" text-white mx-2 md:text-black"/>
            </button>
            </Link>
          </div>
        </div>
        <h1
          className="text-5xl text-center font-bold text-gray-800 my-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We Live, Work & Play
        </h1>
        <div className="flex flex-col gap-2">
          <div className="grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src={Officeimg} alt="" className="rounded" />
            <img src={Officeimg} alt="" className="rounded" />
            <img src={Officeimg} alt="" className="rounded" />
          </div>
          <div className="grid place-content-center grid-cols-1 md:grid-cols-2 gap-6">
            <img src={Officeimg} alt="" className="rounded" />
            <img src={Officeimg} alt="" className="rounded" />
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Career;
