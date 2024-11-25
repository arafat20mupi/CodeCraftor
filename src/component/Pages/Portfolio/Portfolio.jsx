import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Teachable Class',
      img: 'teacher.png',
      categories: ['Client Work', 'React JS', 'Tailwind CSS', 'Express JS',  'MongoDB'],
      liveLink: 'https://teachable-class.netlify.app',

    },
    {
      id: 2,
      title: 'StaffStream',
      img: 'staffsteam.png',
      categories: [ 'Client Work','React JS', 'Tailwind CSS', 'Express JS', 'MongoDB', 'JWT'],
      liveLink: 'https://staffstream.netlify.app/',

    },
    {
      id: 3,
      title: 'Othaba.com',
      img: 'othoba-com.png',
      categories: [ 'Client Work', 'React JS', 'Tailwind CSS', 'MongoDB', 'Express JS', 'Firebase'],
      liveLink: 'https://othoba-com.netlify.app',

    },
    {
      id: 4,
      title: 'Hotel Booking',
      img: 'room.png',
      categories: [ 'Client Work', 'React JS', 'Tailwind CSS', 'MongoDB', 'Express JS', 'Firebase'],
      liveLink: 'https://hotels-bookings-room.netlify.app/',
    },
    {
      id: 5,
      title: 'Art And Craft',
      img: 'art.png',
      categories: ['Client Work', 'React JS', 'Tailwind CSS', 'MongoDB', 'Express JS', 'Firebase'],
      liveLink: 'https://art-and-craft-store.netlify.app',

    },
    {
      id: 6,
      title: 'Sparlax',
      img: 'art.png',
      categories: [ 'Google Map','Client Work', 'React JS',  'Tailwind CSS', 'MongoDB', 'Express JS', 'Firebase'],
      liveLink: 'https://sparlax.com',

    },
    {
      id: 7,
      title: 'School',
      img: 'school.png',
      categories: ['Client Work', 'React JS',  'Tailwind CSS',  'Firebase'],
      liveLink: 'https://thakurgaon-sugar-mills-high-school.netlify.app',

    },
    {
      id: 8,
      title: 'Houses Sale',
      img: 'houses-sale.png',
      categories: ['Client Work', 'React JS',  'Tailwind CSS',  'Firebase'],
      liveLink: 'https://houses-sale.netlify.app',
    },
    {
      id: 9,
      title: 'Houses Sale',
      img: 'houses-sale.png',
      categories: ['Client Work', 'React JS',  'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://books-vibs.netlify.app',
    },
    
  ];

  const allCategories = ['All', ...new Set(projects.flatMap((project) => project.categories))];

  const handleFilter = (category) => setSelectedCategory(category);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  const ProjectLinks = ({ liveLink, clientLink, serverLink }) => (
    <div className="buttons flex flex-wrap gap-2 mt-4">
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="link-btn bg-blue-500">
          Live View
        </a>
      )}
     
    </div>
  );

  return (
    <div className="portfolio bg-gray-900 text-white py-16 px-6 md:px-16 lg:px-36">
      <h1 className="text-center text-4xl font-bold mb-8">My Portfolio</h1>
      <div className="categories flex flex-wrap justify-center gap-4 mb-12">
        {allCategories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
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
          <div key={project.id} className="project-card bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="img-container">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-400 my-3">{project.categories.join(', ')}</p>
              <ProjectLinks
                liveLink={project.liveLink}
                clientLink={project.clientLink}
                serverLink={project.serverLink}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
