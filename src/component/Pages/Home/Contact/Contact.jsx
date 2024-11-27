import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import CountUp from 'react-countup';
import toast from 'react-hot-toast'
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_36f9f45', 'template_l44mwhi', e.target, 'UNHNJuo2QxhkFLInd')
      .then(
        (result) => {
          setSuccessMessage('Your message has been sent successfully!');
          setIsSubmitting(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            phone: '',
            message: '',
          });
          toast.success('Your message has been sent successfully!')
        },
        (error) => {
          setErrorMessage('Oops! Something went wrong. Please try again.');
          setIsSubmitting(false);
          toast.error('Oops! Something went wrong. Please try again');
        }
      );
  };

  return (
    <div className="w-full mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row w-full lg:w-[70%] mx-auto gap-8">
        {/* Contact Form Section */}
        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" className="w-full lg:w-[512px] pt-[78px] pb-[62px] px-[62px] bg-blue-50 p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
          <h2 className="text-blue-800 text-xl font-bold mb-4">CONTACT</h2>
          <h1 className="text-3xl font-bold mb-6">Let's get in touch</h1>
          <p className="text-lg mb-4">
            You can reach us anytime via <a href="mailto:codecraftor.web@gmail.com" className="text-blue-600 hover:underline">codecraftor.web@gmail.com</a>
          </p>
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="border rounded p-2 hover:border-blue-600 transition-colors"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="border rounded p-2 hover:border-blue-600 transition-colors"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="border rounded p-2 w-full hover:border-blue-600 transition-colors"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="border rounded p-2 hover:border-blue-600 transition-colors"
                required
              >
                <option value="">Select Country</option>
                <option value="BD">BD</option>
                <option value="UK">UK</option>
                <option value="US">US</option>
                <option value="IN">IN</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className="border rounded p-2 hover:border-blue-600 transition-colors"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Leave us a message..."
              className="border rounded p-2 w-full hover:border-blue-600 transition-colors"
              rows="4"
              required
            ></textarea>
            <div className="flex items-center">
              <input type="checkbox" className="border rounded mr-2 hover:border-blue-600 transition-colors" required />
              <label className="text-sm">
                You agree to our <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.
              </label>
            </div>
            <button
              type="submit"
              className="relative inline-block w-full overflow-hidden border-sky-500 px-5 py-2 text-sky-500 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-sky-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-sky-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get Started'}
            </button>
          </form>
          {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
        </div>

        {/* Middle Info Section */}
        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" className="w-full lg:w-[280px] bg-blue-50 p-12 rounded-lg shadow-lg mb-8 lg:mb-0">
          <div className="space-y-6 mt-14">
            {/* Info Items */}
            <div>
              <h3 className="text-3xl font-medium"><CountUp enableScrollSpy end={4} />+ <span className="text-lg">Years</span></h3>
              <p className="text-gray-500">Field Experience</p>
              <hr className="border-1 mt-10 border-blue-900" />
            </div>
            <div>
              <h3 className="text-3xl font-medium"><CountUp enableScrollSpy end={950} />+</h3>
              <p className="text-gray-500">Projects Done Around the World</p>
              <hr className="border-1 mt-10 border-blue-900" />
            </div>
            <div>
              <h3 className="text-3xl font-medium"><CountUp enableScrollSpy end={99} />%</h3>
              <p className="text-gray-500">Client Satisfaction</p>
              <hr className="border-1 mt-10 border-blue-900" />
            </div>
            <div>
              <h3 className="text-3xl font-medium"><CountUp enableScrollSpy end={2020} />+</h3>
              <p className="text-gray-500">Year Established</p>
              <hr className="border-1 mt-10 border-blue-900" />
            </div>
            <div>
              <h3 className="text-3xl font-medium"><CountUp enableScrollSpy end={2} /></h3>
              <p className="text-gray-500">Minutes Response Time</p>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" className="w-full lg:w-[280px] bg-blue-50 p-12 rounded-lg shadow-lg">
          <div className="space-y-6 mt-14">
            <div className="space-y-5">
              <BiSupport className="text-4xl text-blue-600" />
              <h3 className="text-xl font-bold">Contact Info</h3>
              <div>
                <p>+8801722172906</p>
                <p><a href="mailto:codecraftor.web@gmail.com" className="text-blue-600 hover:underline">codecraftor.web@gmail.com</a></p>
              </div>
              <hr className="border-1 mt-10 border-blue-900" />
            </div>
            <div className="space-y-5">
              <BsMap className="text-4xl text-blue-600" />
              <h3 className="text-xl font-bold">Our Address</h3>
              <p>Dinajpur, Bangladesh</p>
              <p>Bangladesh</p>
              <hr className="border-1 mt-10 border-blue-900" />
            </div>
            <div className="space-y-5">
              <div className="flex gap-6">
                <a href="https://www.facebook.com/profile.php?id=61564677705735" target="_blank" >
                  <FaFacebook className="text-2xl text-blue-600" />
                </a>
                <a href="https://x.com/CodeCraftor23" target="_blank" >
                  <FaTwitter className="text-2xl text-blue-600" />
                </a>
                <a href="https://youtube.com/@codecraftorweb" target="_blank" >
                  <FaYoutube className="text-2xl text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/company/codecraftor" target="_blank" >
                  <FaLinkedin className="text-2xl text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
