import React, { useState } from 'react';
import './style.css';
import { TbMathGreater } from 'react-icons/tb';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const projects = [
    {
      id: 1,
      title: 'Teachable Class',
      img: 'https://i.ibb.co.com/CPjhfWB/screencapture-teachable-class-netlify-app-2024-11-27-12-32-49.png',
      technology: ['React JS', 'Tailwind CSS', 'Express JS', 'MongoDB'],
      liveLink: 'https://teachable-class.netlify.app',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 2,
      title: 'StaffStream',
      img: 'staffsteam.png',
      technology: ['React JS', 'Tailwind CSS', 'Express JS', 'MongoDB', 'JWT'],
      liveLink: 'https://staffstream.netlify.app/',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 3,
      title: 'Othaba.com',
      img: 'othoba-com.png',
      technology: ['React JS', 'Tailwind CSS', 'MongoDB', 'Express JS', 'Firebase'],
      liveLink: 'https://othoba-com.netlify.app',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 4,
      title: 'Hotel Booking',
      img: 'room.png',
      technology: ['React JS', 'Tailwind CSS', 'MongoDB', 'Express JS', 'Firebase'],
      liveLink: 'https://hotels-bookings-room.netlify.app/',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 5,
      title: 'Art And Craft',
      img: 'art.png',
      technology: ['React JS', 'Tailwind CSS', 'MongoDB', 'Express JS', 'Firebase'],
      liveLink: 'https://art-and-craft-store.netlify.app',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 31,
      title: 'Stationary for Cleaning Company',
      dis: 'Stationery for a Cleaning Company reflects professionalism, cleanliness, and trust through sleek, minimalist designs',
      img: 'https://i.ibb.co.com/tXnPLJV/13.png',
      categories: ['Client Work', 'Visual Design'],
    },
    {
      id: 6,
      title: 'Sparlax',
      img: 'Sparlax.png',
      technology: ['Google Map', 'React JS', 'Tailwind CSS', 'MongoDB', 'Express JS', 'Firebase'],
      liveLink: 'https://sparlax.com',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 21,
      title: 'IZI Coin',
      dis: 'Web-3 Elephant Coin UI/UX Design delivers a seamless, user-friendly interface for a blockchain-based platform.',
      img: 'https://i.ibb.co.com/yfQ4S2y/IZI-Coin.png',
      categories: ['Client Work', 'UI/UX Design'],
    },
    {
      id: 32,
      title: 'Eletricare poster',
      dis: 'Eletricare Poster design highlights professionalism and reliability, showcasing electronic services with a sleek, modern aesthetic....',
      img: 'https://i.ibb.co.com/L0bPVT5/11.png',
      categories: ['Client Work', 'Visual Design'],
    },
    {
      id: 22,
      title: 'West Mining',
      dis: 'West Mining UI/UX Design focuses on creating a seamless, user-friendly UI tailored for efficient and engaging mining operations management.',
      img: 'https://i.ibb.co.com/fQDx2py/West-Mining.png',
      categories: ['Client Work', 'UI/UX Design'],
    },
    {
      id: 24,
      title: 'World Jewellery ',
      dis: 'World Jewellery UI/UX design offers an elegant, user-friendly experience for browsing and purchasing fine jewelry online.',
      img: 'https://i.ibb.co.com/WGg216j/Jewellery.png',
      categories: ['Client Work', 'UI/UX Design'],
    },
    {
      id: 7,
      title: 'School',
      img: 'school.png',
      technology: ['React JS', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://thakurgaon-sugar-mills-high-school.netlify.app',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 8,
      title: 'Houses Sale',
      img: 'houses-sale.png',
      technology: ['React JS', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://houses-sale.netlify.app',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 9,
      title: 'Books Vibs',
      img: 'book.png',
      technology: ['React JS', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://books-vibs.netlify.app',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 10,
      title: 'Lulu Baba',
      img: 'lulubaba.png',
      technology: ['React JS', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://e-commerce-web-omega-one.vercel.app',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 11,
      title: 'Foodies',
      img: 'fudde.png',
      technology: ['React JS', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://foodie-es.vercel.app',
      categories: ['Client Work', 'Web Development'],
    },
    {
      id: 12,
      title: 'Spa',
      img: 'Spa.png',
      technology: ['React JS', 'Tailwind CSS', 'Firebase'],
      categories: ['Client Work', 'Web Development'],
      liveLink: 'https://spaweb4455.vercel.app',
    },
    {
      id: 13,
      title: 'Food',
      img: 'Food.png',
      technology: ['React JS', 'Tailwind CSS', 'Firebase'],
      categories: ['Client Work', 'Web Development'],
      liveLink: 'https://food-webste-abdullah.vercel.app',
    },
  ];

  const allCategories = ['All', ...new Set(projects.flatMap((project) => project.categories))];

  const handleFilter = (category) => setSelectedCategory(category);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  const ProjectLinks = ({ liveLink }) => (
    <div className="buttons flex flex-wrap gap-2 mt-4">
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="link-btn bg-blue-500">
          Live View
        </a>
      )}
    </div>
  );

  return (
    <div className="portfolio py-16 px-6 md:px-16 lg:px-36">
      <h1 className="text-5xl text-center font-bold my-8" data-aos="fade-up" data-aos-duration="600">
        Our Portfolio
      </h1>
      <div className="bg-slate-100 py-2 my-2 px-4 ring-1 ring-gray-300 w-[max-content] rounded-xl justify-center flex items-center mx-auto">
        <h1 className="text-black justify-center flex items-center">
          <span className="text-[#afafaf]">CodeCraftor</span> <TbMathGreater className="mx-2" /> Our Portfolio
        </h1>
      </div>
      <div className="categories flex flex-wrap justify-center gap-4 mb-12">
        {allCategories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
            onClick={() => handleFilter(category)}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-duration="600"
            className="project-card rounded-lg shadow-md overflow-hidden"
          >
            <div className="img-container">
              <img src={project.img && project?.img} alt={project.title} className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-400 my-3">{project.technology && project?.technology.join(', ')}</p>
              <ProjectLinks liveLink={project?.liveLink} />
              {
                project.dis && <p className="text-sm text-gray-400 my-3">{project.dis}</p>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
