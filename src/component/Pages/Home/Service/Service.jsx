import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut leo eget lacus posuere suscipit sed non lacus.
            </p>
        </div>
    );
};

export default Service;
