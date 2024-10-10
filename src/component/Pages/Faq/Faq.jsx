import { TbMathGreater } from 'react-icons/tb';
import faq from '../../../assets/images/faq.png'
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
                            <div data-aos="fade-right" data-aos-duration="1200"><h2 className="text-5xl md:text-6xl text-start font-semibold">Frequently Asked <br /> Questions</h2></div>
                            <div data-aos="fade-right" data-aos-duration="1500" className="mt-10 md:mt-24">
                                <img className='md:w-[800px]' src={faq} alt="" />
                            </div>
                        </div>
                        <div data-aos="zoom-in-down" data-aos-duration="1800" className="space-y-4">
                            <div tabIndex={0} className=" collapse collapse-arrow border-b-2 border-white border-opacity-40 ">
                                <div className="collapse-title text-xl  font-medium">Tell me your customer support?</div>
                                <div className="collapse-content">
                                    <p>Frankly, it's the best in the business and we'll back that up with references from our clients moves at the speed of your business. Our Trainers and operations teams offer support in multiple time zones.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className=" collapse collapse-arrow border-b-2 border-white border-opacity-40 ">
                                <div className="collapse-title text-xl  font-medium">What does your reporting look like?</div>
                                <div className="collapse-content">
                                    <p>Frankly, it's the best in the business and we'll back that up with references from our clients moves at the speed of your business. Our Trainers and operations teams offer support in multiple time zones.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className=" collapse collapse-arrow border-b-2 border-white border-opacity-40 ">
                                <div className="collapse-title text-xl  font-medium">What does training look like?</div>
                                <div className="collapse-content">
                                    <p>Frankly, it's the best in the business and we'll back that up with references from our clients moves at the speed of your business. Our Trainers and operations teams offer support in multiple time zones.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className=" collapse collapse-arrow border-b-2 border-white border-opacity-40 ">
                                <div className="collapse-title text-xl  font-medium">What type of agencies do you work?</div>
                                <div className="collapse-content">
                                    <p>Frankly, it's the best in the business and we'll back that up with references from our clients moves at the speed of your business. Our Trainers and operations teams offer support in multiple time zones.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className=" collapse collapse-arrow border-b-2 border-white border-opacity-40 ">
                                <div className="collapse-title text-xl  font-medium">Is there any on-going training?</div>
                                <div className="collapse-content">
                                    <p>Frankly, it's the best in the business and we'll back that up with references from our clients moves at the speed of your business. Our Trainers and operations teams offer support in multiple time zones.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className=" collapse collapse-arrow border-b-2 border-white border-opacity-40 ">
                                <div className="collapse-title text-xl  font-medium">What if my clients have technical help?</div>
                                <div className="collapse-content">
                                    <p>Frankly, it's the best in the business and we'll back that up with references from our clients moves at the speed of your business. Our Trainers and operations teams offer support in multiple time zones.</p>
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