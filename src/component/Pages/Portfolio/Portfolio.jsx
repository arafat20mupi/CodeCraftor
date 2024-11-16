import React from "react";
import { TbMathGreater } from "react-icons/tb";

const projects = [
  {
    category: "Web Development",
    title: "The Catalyzer",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    image: "https://dummyimage.com/720x400",
    link: "#",
  },
  {
    category: "Design",
    title: "The Innovator",
    description: "Snackwave vaporware mixtape vaporware bitters cloud bread mixtape.",
    image: "https://dummyimage.com/721x401",
    link: "#",
  },
  {
    category: "Mobile App",
    title: "The Creator",
    description: "Fanny pack cronut art party vegan tacos williamsburg mixtape.",
    image: "https://dummyimage.com/722x402",
    link: "#",
  },
  {
    category: "UI/UX",
    title: "The Visionary",
    description: "Poke kinfolk art party cloud bread vaporware sriracha snackwave.",
    image: "https://dummyimage.com/723x403",
    link: "#",
  },
  {
    category: "Branding",
    title: "The Architect",
    description: "Chia shaman kickstarter af prism butcher helvetica bitters.",
    image: "https://dummyimage.com/724x404",
    link: "#",
  },
  {
    category: "Consulting",
    title: "The Strategist",
    description: "Sriracha enamel pin meggings helvetica air plant humblebrag.",
    image: "https://dummyimage.com/725x405",
    link: "#",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="overflow-x-hidden py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]">
      <div className="container">
        <h1
          className="text-5xl text-center font-bold text-gray-800 my-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Our Portfolio
        </h1>
        <div className="bg-slate-100 py-2 px-4 ring-1 ring-gray-300 w-[max-content] rounded-xl justify-center flex items-center mx-auto">
          <h1 className="text-black justify-center flex items-center">
            <span className="text-[#afafaf]">CodeCraftor</span>{" "}
            <TbMathGreater className="mx-2" /> Portfolio
          </h1>
        </div>
      </div>
      <div
        className="container px-5 py-24 mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div className="p-4 md:w-1/3" key={index}>
              <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {project.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:underline"
                      href={project.link}
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
