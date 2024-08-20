import React from 'react';

const Service = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {/* Web Development */}
                <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" className="flex flex-col items-center text-center">
                    <div className="bg-white h-full hover:shadow-2xl transition-shadow p-4 rounded-lg shadow-md">
                        <img
                            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Web Development"
                            className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <button className="bg-blue-200 text-blue-800 py-2 px-4 mt-4 rounded-lg">
                            Web Development
                        </button>
                    </div>
                </div>
                {/* Mobile Development */}
                <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" className="flex flex-col items-center text-center">
                    <div className="bg-white h-full hover:shadow-2xl transition-shadow p-4 rounded-lg shadow-md">
                        <img
                            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Mobile Development"
                            className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <button className="bg-blue-200 text-blue-800 py-2 px-4 mt-4 rounded-lg">
                            Mobile Development
                        </button>
                    </div>
                </div>
                {/* Development Text */}
                <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" className="flex flex-col bg-white p-4 rounded-lg justify-center items-center text-justify hover:shadow-2xl transition-shadow">
                    <div>
                        <div className="text-blue-600 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.828 14.828a4 4 0 01-5.656 0M15 10a2 2 0 012 2m2 0a4 4 0 00-4 4m0-4a4 4 0 00-4-4m4 4H9.343m4.314-4H9.343m2-2a4 4 0 015.656 0M10 10a2 2 0 10-2 2m-2 0a4 4 0 014 4m0-4H7.343m4.314-4H7.343m2-2a4 4 0 00-5.656 0"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Development</h3>
                        <p className="text-gray-600 text-sm">
                            Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.
                        </p>
                        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
