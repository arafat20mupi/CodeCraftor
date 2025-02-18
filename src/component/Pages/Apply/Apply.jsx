import { useForm } from "react-hook-form";
import { TbMathGreater } from "react-icons/tb";
import Contact from "../Contact/Contact";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../../Hook/axiosPublic";

const Apply = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const axios = useAxiosPublic()
  const { job } = location.state;
  const handleUpload = async (data) => {
    const formData = new FormData();

    // Append form data
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("experience", data.experience);
    formData.append("resume", data.resume);

    // Include job name in the form data
    formData.append("jobName", job?.title); 

    try {
      // Submit the form with the resume string and jobName
      const response = await axios.post('/apply', formData, {
        headers: { 'Content-Type': 'application/json' }, 
      });

      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to submit application.");
    }
  };

  const onSubmit = (data) => {
    handleUpload(data);  // Call handleUpload which now also submits the form
  };

  return (
    <div>
      <div className="overflow-x-hidden py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]">
        <div className="container mx-auto">
          <h1 className="text-5xl text-center font-bold text-gray-800 my-8" data-aos="fade-up" data-aos-duration="600">
            Application for jobs
          </h1>
          <div className="bg-slate-100 py-2 px-4 ring-1 ring-gray-300 w-[max-content] rounded-xl justify-center flex items-center mx-auto">
            <h1 className="text-black justify-center flex items-center">
              <span className="text-[#afafaf]">CodeCraftor</span>{" "}
              <TbMathGreater className="mx-2" /> Application for jobs
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Information Section */}
          <h1 className="text-blue-500 text-3xl font-bold mt-8 mb-4">Personal Information</h1>
          <div className="my-7">
            <label htmlFor="fullName" className="text-black my-1">Your Full Name <span className="text-red-600">*</span></label>
            <input id="fullName" {...register("fullName", { required: "Full name is required" })} type="text" className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]" placeholder="Enter your full name" />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* Email Section */}
          <div className="my-7">
            <label htmlFor="email" className="text-black my-1">Your Email <span className="text-red-600">*</span></label>
            <input id="email" {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email format" } })} type="email" className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]" placeholder="Enter your email" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone Section */}
          <div className="my-7">
            <label htmlFor="phone" className="text-black my-1">Your Phone Number <span className="text-red-600">*</span></label>
            <input id="phone" {...register("phone", { required: "Phone number is required", minLength: { value: 10, message: "Phone number must be at least 11 digits" } })} type="number" className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]" placeholder="Enter your phone number" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Career / Experience Section */}
          <h1 className="text-blue-500 text-3xl font-bold mt-8 mb-4">Career / Experience</h1>
          <div className="my-7">
            <label htmlFor="experience" className="text-black my-1">Total Years of Experience <span className="text-red-600">*</span></label>
            <input id="experience" {...register("experience", { required: "Experience is required" })} type="text" className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]" placeholder="Enter your total years of experience" />
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
          </div>

          {/* Resume Upload Section */}
          <div className="my-7">
            <label htmlFor="resume" className="text-black">Resume Link (Google Drive URL) <span className="text-red-600">*</span></label>
            <input id="resume" {...register("resume", { required: "Resume is required" })} type="text" className="w-full my-2 px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]" placeholder="Type Your Resume Google Drive  Link " />
            {errors.resume && <p className="text-red-500 text-sm">{errors.resume.message}</p>}
          </div>

          <input type="submit" value="Submit" className="w-1/3 md:w-1/6 cursor-pointer bg-[#1891C8] hover:bg-[#0b85bd] text-white px-5 py-[15px] shadow-md rounded" />
        </form>
        <Contact />
      </div>
    </div>
  );
};

export default Apply;
