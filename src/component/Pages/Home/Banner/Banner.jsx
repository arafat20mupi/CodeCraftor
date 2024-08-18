const Banner = () => {
    return (
        <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center">
            {/* Left Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
                <h5 className="text-indigo-600 font-semibold uppercase">Empowerment</h5>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
                    Seamless IT for your business, boosting your growth.
                </h1>
                <p className="text-gray-600 mt-4">
                    We provide the expertise and support to propel your business forward in the digital landscape.
                </p>
                <div className="flex justify-center lg:justify-start mt-8">
                    <a
                        href="#"
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-sm md:text-base mr-4 hover:bg-blue-700 transition duration-300"
                    >
                        Learn More
                    </a>
                    <a
                        href="#"
                        className="bg-blue-100 text-blue-600 py-3 px-6 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-200 transition duration-300"
                    >
                        Let’s Talk
                    </a>
                </div>
            </div>

            {/* Right Image & Info Section */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
                <div className="relative p-6 rounded-lg">
                    <img
                        srcSet="
                            https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=640&dpr=1 640w,
                            https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=1 1260w
                        "
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src="https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg"
                        alt="IT Professional"
                        className="rounded-lg w-full object-cover"
                    />
                    <div className="bg-white p-10 rounded-lg shadow-lg flex items-center justify-center gap-4 text-center w-full mt-4">
                        <img src="https://wpriverthemes.com/HTML/synck/assets/imgs/icon1.svg" alt="Experience Icon" />
                        <div className="flex gap-4">
                            <div className="text-indigo-600 text-3xl font-bold">+8</div>
                            <div className="text-gray-600 mt-2">Years Experience</div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center text-center">
                            <div className="flex gap-1 items-center justify-center">
                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-8">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Team Member 1" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Team Member 2" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Team Member 3" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Team Member 4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-gray-600 font-semibold">
                                    <span className="text-[#265FDB]">Meet</span> Our Experts
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center text-center">
                            <div>
                                <div className="flex items-center justify-between text-left space-x-8">
                                    <div>
                                        <small className="text-xs">Verified by</small>
                                        <img
                                            src="https://wpriverthemes.com/HTML/synck/assets/imgs/icon2.svg"
                                            alt="Google Verification"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-gray-600">3245 Reviews</div>
                                        <div className="text-yellow-500 text-lg mt-2">★★★★★</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
