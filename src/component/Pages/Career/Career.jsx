import React from "react";
import { FaMapMarkerAlt, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

const Career = () => {
  const jobs = [
    {
      id: 1,
      title: "Front-end Developer",
      type: "Remote",
      experience: "2+ years",
      location: " Bangladesh",
    },
    {
      id: 2,
      title: "Back-end Developer",
      type: "Onsite",
      experience: "3+ years",
      location: "Dinajpur, Bangladesh",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      type: "Hybrid",
      experience: "1+ year",
      location: " Bangladesh",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-16 lg:px-36">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-8">
        Current Open Positions
      </h1>
      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-slate-100 shadow-xl rounded-xl p-5 ring-[#e2e2e2] ring-1 flex flex-col md:flex-row justify-between items-center"
          >
            <div>
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <p className="my-2">{job.type}</p>
              <p className="my-2">Experience: {job.experience}</p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mx-1" />
                {job.location}
              </p>
            </div>
            <Link state={{ job }} to={`/apply/${job.id}`}>
              <button className="bg-blue-700 px-10 py-3 mt-5 rounded text-white flex items-center hover:bg-blue-500">
                Apply now
                <FaLongArrowAltRight className="text-white mx-2" />
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Contact/>
    </div>
  );
};

export default Career;
