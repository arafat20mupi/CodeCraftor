import React from "react";
import { TbMathGreater } from "react-icons/tb";
const Portfolio = () => {
  return (
    <div className="overflow-x-hidden py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]">
      <div className="container">
        <h1 className="text-5xl text-center font-bold text-gray-800 my-8" data-aos="fade-up" data-aos-duration="600">
          Our Portfolio
              </h1>
              <div className="bg-slate-100 py-2 px-4 ring-1 ring-gray-300 w-[max-content] rounded-xl justify-center flex items-center mx-auto">
          <h1 className="text-black justify-center flex items-center">
            <span className="text-[#afafaf]">CodeCraftor</span>{" "}
            <TbMathGreater className="mx-2" /> Portfolio
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
