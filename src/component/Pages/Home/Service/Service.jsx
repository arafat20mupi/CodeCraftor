import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src={service.image || 'https://via.placeholder.com/600'}
                alt={`Image for ${service.title}`}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-sm md:text-lg font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 text-xs md:text-sm mt-2">
                {service.description || 'No description available.'}
            </p>
        </div>
    );
};

export default Service;
