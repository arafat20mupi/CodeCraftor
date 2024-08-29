import { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const dropdown3Ref = useRef(null);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) ||
            (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) ||
            (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target))
        ) {
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
        <nav className="bg-[#eceadd] shadow-md fixed top-0 w-full z-50">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Synck Logo"
                            className="h-10 w-auto rounded-full"
                        />
                        <span className="md:ml-2 text-sm md:text-xl font-semibold">The Proper Partner</span>
                    </div>

                    {/* Responsive Menu Button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            aria-label="Toggle menu"
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

                    {/* Desktop Links Section */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-6">
                        <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            Home
                        </a>
                        <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            Company
                        </a>
                        <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            Portfolio
                        </a>
                        <div ref={dropdown3Ref} className="relative">
                            <button
                                onClick={() => setActiveItem(activeItem === 'Services' ? null : 'Services')}
                                className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out"
                            >
                                Services <IoMdArrowDropdown className='text-2xl' />
                            </button>
                            {activeItem === 'Services' && (
                                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Projects
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Case Studies
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Testimonials
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            FAQ
                        </a>
                    </div>

                    {/* Desktop Contact Section */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        <button className="btn btn-outline text-[#183282] rounded-xl border border-[#FF9A63]">Contact us</button>
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
                        aria-label="Close menu"
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
                    <a href="#" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md">
                        Home
                    </a>
                    <a href="#" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md">
                        Company
                    </a>
                    <a href="#" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md">
                        Portfolio
                    </a>
                    <div className="relative">
                        <button
                            onClick={() => setActiveItem(activeItem === 'Services' ? null : 'Services')}
                            className="flex items-center justify-between w-full text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md"
                        >
                            Services <IoMdArrowDropdown className="text-2xl" />
                        </button>
                        {activeItem === 'Services' && (
                            <div className="pl-6">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Projects
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Case Studies
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Testimonials
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md">
                        FAQ
                    </a>
                </div>
                <div className="px-2 pb-3 space-y-1">
                    <a href="#" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Contact Us</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
