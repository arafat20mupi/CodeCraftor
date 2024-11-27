import { TbMathGreater } from 'react-icons/tb';
import faq from '../../../assets/images/faq.png';

const Faq = () => {
    return (
        <div className='bg-gradient-to-r '>
            <div className="overflow-x-hidden py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]">
                <h1
                    className="text-5xl text-center font-bold text-gray-800 my-8"
                    data-aos="fade-up"
                    data-aos-duration="600"
                >
                    Frequently Asked
                    Questions
                </h1>
                <div className=" py-2 px-4 ring-1 bg-white w-[max-content] rounded-xl justify-center flex items-center mx-auto">
                    <h1 className="text-black justify-center flex items-center">
                        <span className="text-[#afafaf]">CodeCraftor</span>{" "}
                        <TbMathGreater className="mx-2" /> FAQ
                    </h1>
                </div>
                <div className="w-[90%] mx-auto mt-4">
                    <div className=" md:flex  gap-28 justify-center ">
                        <div data-aos="zoom-in-up" data-aos-duration="1000">
                            <div data-aos="fade-right" data-aos-duration="1200">
                                <h2 className="text-5xl md:text-6xl text-start font-semibold">Frequently Asked <br /> Questions</h2>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" className="mt-10 md:mt-24">
                                <img className='md:w-[800px]' src={faq} alt="FAQ illustration" />
                            </div>
                        </div>
                        <div data-aos="zoom-in-down" data-aos-duration="1800" className="space-y-4">
                            <div tabIndex={0} className="collapse collapse-arrow border-b-2 border-white border-opacity-40">
                                <div className="collapse-title text-xl font-medium">What services does CodeCraftor offer?</div>
                                <div className="collapse-content">
                                    <p>CodeCraftor specializes in providing end-to-end web development services, including front-end design, backend development, API integrations, and custom solutions tailored to meet client needs.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow border-b-2 border-white border-opacity-40">
                                <div className="collapse-title text-xl font-medium">What is your approach to client projects?</div>
                                <div className="collapse-content">
                                    <p>We follow a collaborative approach by understanding client requirements, providing regular updates, and delivering high-quality work on time. Transparency and communication are our top priorities.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow border-b-2 border-white border-opacity-40">
                                <div className="collapse-title text-xl font-medium">How does CodeCraftor ensure quality?</div>
                                <div className="collapse-content">
                                    <p>Our experienced team uses the latest technologies and rigorous testing processes to ensure that every project meets the highest standards of quality and functionality.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow border-b-2 border-white border-opacity-40">
                                <div className="collapse-title text-xl font-medium">What industries does CodeCraftor work with?</div>
                                <div className="collapse-content">
                                    <p>We work with diverse industries, including e-commerce, healthcare, technology, education, and startups, offering tailored solutions to help businesses grow digitally.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow border-b-2 border-white border-opacity-40">
                                <div className="collapse-title text-xl font-medium">Does CodeCraftor offer post-project support?</div>
                                <div className="collapse-content">
                                    <p>Yes, we provide ongoing support and maintenance to ensure your website or application runs smoothly, even after the project is delivered.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow border-b-2 border-white border-opacity-40">
                                <div className="collapse-title text-xl font-medium">How do I get started with CodeCraftor?</div>
                                <div className="collapse-content">
                                    <p>You can get started by reaching out to us via email or our website. We'll schedule a consultation to understand your requirements and create a roadmap for your project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
