import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold my-10 text-black">Contact Us</h1>
        <p className="my-1 md:w-1/2 text-black">
          Fill in the below form to receive a detailed estimation. One of our
          friendly team member will be in touch soon
        </p>
        <form action="" className="flex flex-col gap-4 my-10">
          <label htmlFor="" className="text-black">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            required
            type="text"
            className="w-4/2 px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
            placeholder="Enter your Name"
          />
          <div className="grid sm:grid-cols-2 gap-y-6 gap-6">
            <div className="flex flex-col">
              <label htmlFor="" className="text-black">
                {" "}
                Email <span className="text-red-600">*</span>
              </label>
              <input
                required
                type="text"
                className="w-6/6 px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-black">
                {" "}
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                required
                type="text"
                className="w-6/6 px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter your Phone"
              />
            </div>
            <label htmlFor="" className="text-black">
              {" "}
              Services<span className="text-red-600">*</span>
            </label>
          </div>
          <select
            type="text"
            className="w-4/2 px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
          >
            <option value="volvo">Select Services</option>
            <option value="saab">Front-end Developer(Web)</option>
            <option value="opel">Back-end Developer(Web/App)</option>
            <option value="audi">
              App Developer(Flutter/java/Kotlin/Native)
            </option>
            <option value="audi">Digital Marketer & SEO Expert</option>
            <option value="audi">Graphics Designer</option>
            <option value="audi">Video Editor</option>
            <option value="audi">Content Writer</option>
            <option value="audi">WordPress Developer</option>
            <option value="audi">PHP,Laravel Developer</option>
          </select>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-black">
              {" "}
              Messege<span className="text-red-600">*</span>
            </label>
            <textarea
              placeholder="Messege"
              required
              className="w-4/2 h-[140px] px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
            ></textarea>
          </div>
          <p className="my-2 md:w-1/2 text-black">
            I consent to the processing of my personal data to CodeCrafotr
            Systems for Project purposes. For more information, please refer to
            our privacy policy.
          </p>
          <input
            type="submit"
            value="Submit"
            className="w-1/3 md:w-1/6 cursor-pointer bg-[#1891C8] hover:bg-[#0b85bd] text-white px-5 py-[15px] shadow-md rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
