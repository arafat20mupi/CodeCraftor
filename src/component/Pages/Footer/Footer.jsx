import CodeCraftor from '../../../assets/images/newlogo.png'
import { Link } from "react-router-dom";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className=" text-gray-400 bg-gradient-to-r from-[#182E76] to-[#37233B] body-font">
            <div className='w-[90%] mx-auto'>
                <div className=' py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
                    <div className="container w-[90%] mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left"><img src={CodeCraftor} className='w-28 bg-white rounded-full' alt="" />
                        </p>
                        <span className="md:flex space-y-5 items-center gap-5 md:ml-auto mt-2 justify-center">
                            <Link className='md:mt-4' href="">Send us email at</Link>
                            <button className="btn w-full md:w-[unset] bg-gradient-to-r from-[#FF9A63] to-[#FE804B] text-white text-sm font-normal leading-6 md:px-10">
                                {/* button width problem solve -Nirob */}
                                codecraftor.web@gmail.com
                            </button>
                        </span>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full' width="1170" height="2" viewBox="0 0 1170 2" fill="none">
                        <path opacity="0.1" d="M0 1H1170" stroke="white" />
                    </svg>
                </div>
                <div className="px-5 py-14 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link to={'/company'} className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <span className="ml-3 text-white text-xl">About us</span>
                        </Link>
                        <p className="mt-2 text-sm text-gray-400">2715 Ash Dr. San Jose, South Dakota 83475</p>
                        <p className="mt-2 text-sm text-gray-400">nevaeh@example.com</p>
                        <p className="mt-2 text-sm text-gray-400">(316) 555-0116</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Services</h2>
                            <nav className="list-none space-y-4 mb-10">
                                <li>
                                    <Link to={"/"} className="text-gray-400 hover:text-gray-200">Home</Link>
                                </li>
                                <li>
                                    <Link to={"/company"} className="text-gray-400 hover:text-gray-200">About</Link>
                                </li>
                                <li>
                                    <Link to={"/Project"} className="text-gray-400 hover:text-gray-200">Projects</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"} className="text-gray-400 hover:text-gray-200">Contact</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Web design</h2>
                            <nav className="list-none space-y-4 mb-10">
                                <li>
                                    <Link to={'/CaseStudies'}  className="text-gray-400 hover:text-gray-200">E-commerce</Link>
                                </li>
                                <li>
                                    <Link to={'/CaseStudies'}  className="text-gray-400 hover:text-gray-200">SEO</Link>
                                </li>
                                <li>
                                    <Link to={'/CaseStudies'}  className="text-gray-400 hover:text-gray-200">Digital Marketing</Link>
                                </li>
                                <li>
                                    <Link to={'/CaseStudies'}  className="text-gray-400 hover:text-gray-200">Projects</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Development</h2>
                            <nav className="list-none space-y-4 mb-10">
                                <li>
                                    <Link  className="text-gray-400 hover:text-gray-200">Services</Link>
                                </li>
                                <li>
                                    <Link  className="text-gray-400 hover:text-gray-200">Shopify</Link>
                                </li>
                                <li>
                                    <Link  className="text-gray-400 hover:text-gray-200">Projects</Link>
                                </li>
                                <li>
                                    <Link  className="text-gray-400 hover:text-gray-200">About us</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">An odd bunch:</h2>
                            <nav className="list-none space-y-4 mb-10">
                                
                                <li>
                                    <Link  className="text-gray-400 hover:text-gray-200">Bangladesh</Link>
                                </li>
                                <li>
                                    <Link  className="text-gray-400 hover:text-gray-200">USA</Link>
                                </li>
                                <li>
                                    <Link  className="text-gray-400 hover:text-gray-200">South Africa</Link>
                                </li>
                                <li>
                                    <Link  className="text-gray-400 hover:text-gray-200">UK</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#182E76] to-[#37233B]">
                    <div className="py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">© Copyright @ UIHUT {currentYear}. All rights reserved.
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link  className="text-gray-400" aria-label="Facebook">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link  className="ml-3 text-gray-400" aria-label="Twitter">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link  className="ml-3 text-gray-400" aria-label="Instagram">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link  className="ml-3 text-gray-400" aria-label="LinkedIn">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
