import faq from '../../../assets/images/faq.png'
const Faq = () => {
    return (
        <div style={{borderRadius: '100px 100px 0px 0px'}} className='bg-gradient-to-r from-[#182E76] to-[#37233B]'>
            <div className="  container  mx-auto md:p-8 p-4  text-white">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className="text-3xl md:text-[58px] font-semibold leading-[68px] w-full md:w-[676px]">Have an Idea? Let's Build and Scale It!</h1>
                    <button data-aos="flip-up" data-aos-delay="50" data-aos-duration="500" className="btn my-8 md:my-28 w-full md:w-[164px] bg-gradient-to-r from-[#FF9A63] to-[#FE804B] text-white text-sm font-normal leading-6 ">
                        Book a demo
                    </button>
                </div>

                <div className="w-[90%] mx-auto">
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