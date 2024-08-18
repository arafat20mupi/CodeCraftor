import { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const dropdown3Ref = useRef(null);
    const menuRef = useRef(null);

    // Close dropdowns and menu when clicking outside
    const handleClickOutside = (event) => {
        if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
            setActiveItem(null);
        }
        if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
            setActiveItem(null);
        }
        if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
            setActiveItem(null);
        }
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="/path/to/logo.png"
                            alt="Synck Logo"
                            className="h-8 w-auto"
                        />
                        <span className="ml-2 text-xl font-semibold">SYNCK</span>
                    </div>

                    {/* Responsive Menu Button */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={isMenuOpen ? "hidden" : "block"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                                <path
                                    className={isMenuOpen ? "block" : "hidden"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Links Section */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-6">
                        {/* Dropdown 1 (Home) */}
                        <div
                            ref={dropdown1Ref}
                            className="relative"
                        >
                            <button
                                onClick={() => setActiveItem(activeItem === 'home' ? null : 'home')}
                                className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out"
                            >
                                Home 
                            </button>
                            {/* {activeItem === 'home' && (
                                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Overview 
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Updates
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Announcements
                                    </a>
                                </div>
                            )} */}
                        </div>

                        {/* Dropdown 2 (Company) */}
                        <div
                            ref={dropdown2Ref}
                            className="relative"
                        >
                            <button
                                onClick={() => setActiveItem(activeItem === 'company' ? null : 'company')}
                                className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out"
                            >
                                Company <IoMdArrowDropdown className='text-2xl' />
                            </button>
                            {activeItem === 'company' && (
                                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        About Us
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Team
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Careers
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Dropdown 3 (Portfolio) */}
                        <div
                            ref={dropdown3Ref}
                            className="relative"
                        >
                            <button
                                onClick={() => setActiveItem(activeItem === 'portfolio' ? null : 'portfolio')}
                                className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out"
                            >
                                Portfolio <IoMdArrowDropdown className='text-2xl' />
                            </button>
                            {activeItem === 'portfolio' && (
                                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Case Studies
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Testimonials
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            Services
                        </a>
                        <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            FAQ
                        </a>
                    </div>

                    {/* Contact Section */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        <a href="tel:+19387407555" className="text-blue-600 hover:underline">
                            Call Us ↗
                        </a>
                        <span className="text-gray-800">+1-938-740-7555</span>
                        <a
                            href="#"
                            className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-200 ease-in-out"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div ref={menuRef} className={`fixed inset-0 bg-white shadow-md transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
                <div className="flex justify-between items-center px-4 py-3">
                    <span className="text-lg font-semibold">Menu</span>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* Dropdown 1 (Home) */}
                    <div className="relative">
                        <button
                            onClick={() => setActiveItem(activeItem === 'home' ? null : 'home')}
                            className={`block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md ${activeItem === 'home' ? 'text-blue-600' : ''}`}
                        >
                            Home
                        </button>
                        {activeItem === 'home' && (
                            <div className="pl-4 transition-all duration-300 ease-in-out">
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    Overview
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    Updates
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    Announcements
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Dropdown 2 (Company) */}
                    <div className="relative">
                        <button
                            onClick={() => setActiveItem(activeItem === 'company' ? null : 'company')}
                            className={`block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md ${activeItem === 'company' ? 'text-blue-600' : ''}`}
                        >
                            Company
                        </button>
                        {activeItem === 'company' && (
                            <div className="pl-4 transition-all duration-300 ease-in-out">
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    About Us
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    Team
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    Careers
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Dropdown 3 (Portfolio) */}
                    <div className="relative">
                        <button
                            onClick={() => setActiveItem(activeItem === 'portfolio' ? null : 'portfolio')}
                            className={`block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md ${activeItem === 'portfolio' ? 'text-blue-600' : ''}`}
                        >
                            Portfolio
                        </button>
                        {activeItem === 'portfolio' && (
                            <div className="pl-4 transition-all duration-300 ease-in-out">
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    Case Studies
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                >
                                    Testimonials
                                </a>
                            </div>
                        )}
                    </div>

                    <a
                        href="#"
                        className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md"
                    >
                        FAQ
                    </a>

                    <div className="mt-4 space-y-2">
                        <a href="tel:+19387407555" className="block px-3 py-2 text-blue-600 hover:underline">
                            Call Us ↗
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-center text-white bg-blue-600 rounded-full hover:bg-blue-700"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;