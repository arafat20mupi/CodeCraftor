import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.consent) newErrors.consent = "You must agree to the consent.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      toast.success("Thank you for contacting us!");
      console.log("Form Data Submitted:", formData);
      
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-36 mx-auto text-base text-gray-700 leading-relaxed space-y-8 mt-16 py-16">
      <div>
        <h1 className="text-5xl font-bold my-10 text-black">Contact Us</h1>
        <p className="my-1 md:w-1/2 text-black">
          Fill in the below form to receive a detailed estimation. One of our
          friendly team members will be in touch soon.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 my-10"
        >
          <label htmlFor="name" className="text-black">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
            placeholder="Enter your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <div className="grid sm:grid-cols-2 gap-y-6 gap-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-black">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-black">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter your Phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          <label htmlFor="service" className="text-black">
            Services <span className="text-red-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
          >
            <option value="">Select Services</option>
            <option value="job_application">Job Application</option>
            <option value="contact_team">Contact Our Team</option>
            <option value="make_website">Make Website</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm">{errors.service}</p>
          )}

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-black">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-[140px] px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mr-2"
            />
            I consent to the processing of my personal data by CodeCraftor
            Systems for project purposes. For more information, please refer to
            our privacy policy.
          </label>
          {errors.consent && (
            <p className="text-red-500 text-sm">{errors.consent}</p>
          )}

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
