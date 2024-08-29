import firstImg from '../../../../assets/images/first.png';
import secundImg from '../../../../assets/images/secund.png';
import theadImg from '../../../../assets/images/thard.png';
import fourImg from '../../../../assets/images/four.png';

const Minds = () => {
    return (
        <div className='mt-[650px] md:mt-[550px] w-[90%] mx-auto'>
            <section>
                <div>
                    <div className="pt-20">
                        <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className="text-3xl md:text-5xl text-center mt-8 md:mt-0  font-semibold text-[#183282]">Comprised of diverse <br /> minds</h1>
                    </div>

                    <div className="md:flex items-center justify-around md:gap-10 space-y-8 p-3">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <img className="rounded-2xl" src={firstImg} alt="" />
                            <div>
                                <h2 className="text-2xl my-4 text-[#183282] font-semibold">
                                    GEMINI SKINCARE
                                </h2>
                                <div className="flex flex-wrap w-60 md:w-full gap-1 text-white">
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">Copywriting</p>
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">Brand content</p>
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">E-commerce</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500">
                            <img className="rounded-2xl" src={secundImg} alt="" />
                            <div>
                                <h2 className="text-2xl tracking-tighter my-4 text-[#183282] font-semibold">
                                    SILV PEANUT BUTTER
                                </h2>
                                <div className="flex flex-wrap w-60 md:w-full gap-1 text-white">
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">Copywriting</p>
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">Brand content</p>
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">E-commerce</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex items-center justify-around md:gap-10 space-y-8 md:space-y-0 p-3 md:mt-20">
                        <div data-aos="fade-right" data-aos-duration="2000">
                            <img className="rounded-2xl" src={theadImg} alt="" />
                            <div>
                                <h2 className="text-2xl my-4 text-[#183282] font-semibold">
                                    GOODROOT PIZZA
                                </h2>
                                <div className="flex flex-wrap w-60 md:w-full gap-1 text-white">
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">Copywriting</p>
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">Brand content</p>
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">E-commerce</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2500">
                            <img className={"rounded-2xl"} src={fourImg} alt="" />
                            <div>
                                <h2 className="text-2xl tracking-tighter my-4 text-[#183282] font-semibold">
                                    OLIPOP DRINKS
                                </h2>
                                <div className="flex flex-wrap w-60 md:w-full gap-1 text-white">
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">Copywriting</p>
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">Brand content</p>
                                    <p className="text-xs bg-[#183282] px-2 rounded-3xl font-bold">E-commerce</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="50" data-aos-duration="500" className="py-20 flex justify-center items-center text-white ">
                        <button className="px-11 font-medium py-4 rounded-xl bg-[#FF9A63]">See all projects</button>
                    </div>

                </div>
            </section>
        </div >
    );
};

export default Minds;