import React from 'react';

const TimeLine = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 items-center py-32 px-6 md:px-28">
            <div className="w-full md:w-[40%] mb-8 md:mb-0">
                <p className="text-blue-500 text-sm uppercase tracking-wide">Consulting Excellence</p>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">Best pathway to our clients.</h1>
                <p className="text-gray-600 mt-4">
                    Our consulting process begins with a thorough assessment of your current IT infrastructure, workflows, and pain points.
                </p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">&#10004;</span> 24/7 Full Service Support
                    </li>
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">&#10004;</span> Immediate Response
                    </li>
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">&#10004;</span> Easy to Approach us
                    </li>
                </ul>
            </div>

            <div className="relative w-full md:w-[60%]">
                {/* Timeline circles in the middle */}
                <div className="absolute left-[75%] md:left-1/2 transform md:-translate-x-1/2 top-0 h-full flex flex-col items-center">
                    <div className="bg-blue-100 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <span className="text-blue-500 font-bold text-sm md:text-base">01</span>
                    </div>
                    <div className="border-l-2 border-dashed border-gray-300 h-16 md:h-20"></div>
                    <div className="bg-blue-100 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <span className="text-blue-500 font-bold text-sm md:text-base">02</span>
                    </div>
                    <div className="border-l-2 border-dashed border-gray-300 h-16 md:h-20"></div>
                    <div className="bg-blue-100 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <span className="text-blue-500 font-bold text-sm md:text-base">03</span>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-8 pt-8">
                    {/* Left Position */}
                    <div className="bg-blue-50 p-3 md:p-4 rounded-lg w-[200px] md:w-[300px] md:ml-[55%] -mt-14">
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">Discovery and Analysis</h3>
                        <p className="text-gray-600 text-xs md:text-sm">Perform an analysis of the client's existing IT systems.</p>
                    </div>
                    {/* Right Position */}
                    <div className="bg-blue-50 p-3 md:p-4 rounded-lg w-[200px] md:w-[300px] md:ml-[11%]">
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">Tailored Solutions</h3>
                        <p className="text-gray-600 text-xs md:text-sm">Develop IT solutions based on the analysis phase.</p>
                    </div>
                    {/* Left Position */}
                    <div className="bg-blue-50 p-3 md:p-4 rounded-lg w-[200px] md:w-[300px] md:ml-[55%] -mt-14">
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">Deployment and Support</h3>
                        <p className="text-gray-600 text-xs md:text-sm">Regularly communicate with our client to address any concern.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
