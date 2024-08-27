import React from "react";

const HowWeDo = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="w-full md:w-[80%] mx-auto px-4">
                <div data-aos="zoom-in" data-aos-duration="1700" className="text-left mb-12">
                    <h3 className="text-blue-400 uppercase mb-4">Our Model</h3>
                    <h2 className="text-4xl font-bold">How we do</h2>
                    <p className="mt-4 text-gray-400">
                        Save time and money with our powerful method.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Brainstorming", icon: "🧠", description: "Ideas" },
                        { title: "Product", icon: "✏️", description: "Design" },
                        { title: "Front-End", icon: "🖥️", description: "Development" },
                        { title: "SEO", icon: "📈", description: "Optimization" },
                        { title: "Back-End", icon: "⚙️", description: "Development" },
                        { title: "Digital", icon: "📢", description: "Marketing" },
                    ].map((item, index) => (
                        <div key={index} data-aos="zoom-in" data-aos-duration="1700" className="relative p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl text-blue-400 group-hover:text-blue-300 transition duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold group-hover:text-blue-300 transition duration-300">{item.title}</h4>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition duration-300">{item.description}</p>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <div className="bg-blue-400 w-4 h-4 rounded-full group-hover:bg-blue-300 transition duration-300"></div>
                                <div className="w-12 border-t border-dashed border-gray-500 group-hover:border-gray-400 transition duration-300"></div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-0 group-hover:opacity-10 rounded-lg transition duration-500"></div>
                        </div>
                    ))}
                </div>
                <div data-aos="zoom-in" data-aos-duration="1700" className="mt-12 text-left">
                    {/* <a
                        href="#"
                        className="bg-blue-400 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
                    >
                        Learn More
                    </a> */}
                    <a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Learn More</span>
                        <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowWeDo;
