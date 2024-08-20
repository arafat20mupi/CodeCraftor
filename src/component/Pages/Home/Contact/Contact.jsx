import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { BsMap } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="w-full mx-auto px-4 py-24">
            <div className="flex flex-col lg:flex-row w-full lg:w-[70%] mx-auto gap-8">
                {/* Contact Form Section */}
                <div className="w-full lg:w-[512px] pt-[78px] pb-[62px] px-[62px] bg-blue-50 p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
                    <h2 className="text-blue-800 text-xl font-bold mb-4">CONTACT</h2>
                    <h1 className="text-3xl font-bold mb-6">Let's get in touch</h1>
                    <p className="text-lg mb-4">
                        You can reach us anytime via <a href="mailto:bluebase@mail.com" className="text-blue-600">bluebase@mail.com</a>
                    </p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="border rounded p-2" />
                            <input type="text" placeholder="Last Name" className="border rounded p-2" />
                        </div>
                        <input type="email" placeholder="Your Email" className="border rounded p-2 w-full" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <select className="border rounded p-2">
                                <option>UK</option>
                                <option>US</option>
                                <option>IN</option>
                            </select>
                            <input type="text" placeholder="Your Number" className="border rounded p-2" />
                        </div>
                        <input type="text" placeholder="Country" className="border rounded p-2 w-full" />
                        <textarea placeholder="Leave us a message..." className="border rounded p-2 w-full" rows="4"></textarea>
                        <div className="flex items-center">
                            <input type="checkbox" className="border rounded mr-2" />
                            <label className="text-sm">You agree to our <a href="#" className="text-blue-600">terms and conditions</a>.</label>
                        </div>
                        <button className="bg-blue-600 text-white rounded p-2 w-full">Get Started</button>
                    </form>
                </div>

                {/* Middle Info Section */}
                <div className="w-full lg:w-[280px] bg-blue-50 p-12 rounded-lg shadow-lg mb-8 lg:mb-0">
                    <div className="space-y-6 mt-14">
                        <div>
                            <h3 className="text-3xl font-medium">22+ <span className="text-lg">Years</span></h3>
                            <p className="text-gray-500">Field Experience</p>
                            <hr className='border-1 mt-10 border-blue-900' />
                        </div>
                        <div>
                            <h3 className="text-3xl font-medium">950+</h3>
                            <p className="text-gray-500">Projects Done Around World</p>
                            <hr className='border-1 mt-10 border-blue-900' />
                        </div>
                        <div>
                            <h3 className="text-3xl font-medium">99%</h3>
                            <p className="text-gray-500">Client Satisfaction</p>
                            <hr className='border-1 mt-10 border-blue-900' />
                        </div>
                        <div>
                            <h3 className="text-3xl font-medium">1995+</h3>
                            <p className="text-gray-500">Year Established On</p>
                            <hr className='border-1 mt-10 border-blue-900' />
                        </div>
                        <div>
                            <h3 className="text-3xl font-medium">2</h3>
                            <p className="text-gray-500">Mins Response Time</p>
                        </div>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className="w-full lg:w-[280px] bg-blue-50 p-12 rounded-lg shadow-lg">
                    <div className="space-y-6 mt-14">
                        <div className='space-y-5'>
                            <BiSupport className='text-4xl text-blue-600' />
                            <h3 className="text-xl font-bold">Contact Info</h3>
                            <div>
                                <p>+1 455 1482 236</p>
                                <p><a href="mailto:bluebase@mail.com" className="text-blue-600">Bluebase@mail.com</a></p>
                            </div>
                            <hr className='border-1 mt-10 border-blue-900' />
                        </div>
                        <div className='space-y-5'>
                            <BsMap className='text-4xl text-blue-600' />
                            <h3 className="text-xl font-bold">Visit our office</h3>
                            <div>
                                <p>16/9, Down Street</p>
                                <p>Edinburgh, Scotland</p>
                                <p>United Kingdom</p>
                            </div>
                            <hr className='border-1 mt-10 border-blue-900' />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="flex items-center gap-2"><FaFacebook className='text-blue-600' /> Facebook</a>
                            <a href="#" className="flex items-center gap-2"><FaTwitter className='text-blue-600' /> Twitter</a>
                            <a href="#" className="flex items-center gap-2"><FaInstagram className='text-blue-600' /> Instagram</a>
                            <a href="#" className="flex items-center gap-2"><FaLinkedin className='text-blue-600' /> LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;