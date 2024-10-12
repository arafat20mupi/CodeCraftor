import React from "react";
import { TbMathGreater } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import Contact from "../Contact/Contact";
const Apply = () => {
  return (
    <div>
      <div className="overflow-x-hidden py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]">
        <div className="conatainer mx-auto">
          <h1
            className="text-5xl text-center font-bold text-gray-800 my-8"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Application for jobs
          </h1>
          <div className="bg-slate-100 py-2 px-4 ring-1 ring-gray-300 w-[max-content] rounded-xl justify-center flex items-center mx-auto">
            <h1 className="text-black justify-center flex items-center">
              <span className="text-[#afafaf]">CodeCraftor</span>{" "}
              <TbMathGreater className="mx-2" /> Application for jobs
            </h1>
          </div>
        </div>
        <div>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-4xl font-bold"
          >
            Application for jobs
          </h1>
          <p className="my-2">
            Join CodeCraftor, a leading web development and digital solutions
            company, where innovation meets creativity. We're looking for
            passionate individuals skilled in web design, development, SEO, or
            graphic design. Be part of a dynamic team dedicated to excellence.
            Apply today and help us craft the future of the web!
          </p>
        </div>
        <form action="">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mt-8 mb-4">
              Personal Information
            </h1>
            <div className="my-7">
              <label htmlFor="" className="text-black my-1">
                Your full Name <span className="text-red-600">*</span>
              </label>
              <input
                required
                type="text"
                className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter full your Name"
              />
            </div>
            <div className="my-7">
              <label htmlFor="" className="text-black my-1">
                Your Email<span className="text-red-600">*</span>
              </label>
              <input
                required
                type="text"
                className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter your Email"
              />
            </div>
            <div className="my-7">
              <label htmlFor="" className="text-black my-1">
                Your Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                required
                type="number"
                className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter your Number"
              />
            </div>
          </div>
        </form>
        <div>
          <h1 className="text-blue-500 text-3xl font-bold mt-8 mb-4">
            Career / Experience
          </h1>
          <div className="my-7">
            <label htmlFor="" className="text-black my-1">
              Total Years of Experience *{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
              placeholder="Enter your Total Years of Experience"
            />
          </div>
          <div className="my-7">
            <label htmlFor="" className="text-black my-1">
              Expertise/Interest Areas
              <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              type="text"
              className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
              placeholder="Explain"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="my-7">
            <label htmlFor="" className="text-black my-1">
              Current Salary
              <span className="text-red-600">*</span>
            </label>
            <input
              required
              type="number"
              className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
              placeholder="Enter your Current Salary"
            />
          </div>
          <div className="my-7">
            <label htmlFor="" className="text-black my-1">
              Expected Salary
              <span className="text-red-600">*</span>
            </label>
            <input
              required
              type="number"
              className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
              placeholder="Enter your Expected Salary "
            />
          </div>
          <div className="my-7">
            <label htmlFor="" className="text-black my-1">
              Cover Letter
              <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              type="text"
              className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
              placeholder="Explain"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="my-7">
            <label htmlFor="" className="text-black">
              Upload Resume Here
              <span className="text-red-600">*</span>
            </label>
            <br />
            <input
              required
              type="file"
              className="w-full my-2 px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
              placeholder="Enter your Current Salary"
            />
          </div>
          <div className="my-7">
            <label htmlFor="" className="text-black my-1">
              Portfolio
              <span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
              placeholder="Enter your Portfolio"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-1/3 md:w-1/6 cursor-pointer bg-[#1891C8] hover:bg-[#0b85bd] text-white px-5 py-[15px] shadow-md rounded"
          />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Apply;
