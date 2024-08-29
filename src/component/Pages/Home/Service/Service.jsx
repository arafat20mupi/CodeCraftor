import React from 'react';

const Service = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500" className="md:flex gap-10">
                <div className='md:flex space-y-4 w-full md:w-[60%] bg-white p-4 gap-5'>
                    {/* Web Development */}
                    <div className="bg-white space-y-5 md:w-[800px] hover:shadow-2xl transition-shadow  rounded-lg shadow-md">
                        <div className='py-2 mt-2 px-4'>
                            <button className='btn text-sky-600 bg-[#E7EDFB] text-[10px] w-[150px]'>Web Development</button>
                        </div>
                        <div className='ml-14'>
                            <img
                                src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Web Development"
                                className="w-full  h-48 object-cover mb-4 rounded-md"
                            />
                        </div>
                    </div>
                    {/* Mobile Development */}
                    <div className="bg-white space-y-5 md:w-[800px]  hover:shadow-2xl transition-shadow rounded-lg shadow-md">
                        <div className='py-2 px-4'>
                            <button className='btn text-sky-600 bg-[#E7EDFB] text-[10px] w-[150px]'>Mobile Development</button>
                        </div>
                        <div className='ml-20'>
                            <img
                                src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Web Development"
                                className="w-full  h-48 object-cover mb-4 rounded-md"
                            />
                        </div>
                    </div>
                </div>
                {/* Development Text */}
                <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" className="flex flex-col md:w-[40%] bg-white p-4 rounded-lg justify-center items-center text-justify hover:shadow-2xl transition-shadow">
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
                        <p className="text-gray-600 text-justify text-sm">
                            Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
