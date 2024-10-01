import email from '../../../../assets/images/email.png';
import arrow from '../../../../assets/images/arrow.png';
import banner from '../../../../assets/images/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = ()  => {
    return (
        <div
            style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: 'no-repeat',
            }}
            
            className="text-left space-y-8 py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]"
        >
            <div>
                <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-wrap items-center gap-3 md:gap-6 text-[#183282] text-6xl md:text-8xl font-extrabold">
                    <h2>We develop </h2>
                    <h3 className="flex items-center gap-3 md:gap-6">
                        the <img className="mb-[8px] md:mb-[12px] w-[36px] md:w-[90px]" src={email} alt="email icon" /> eye
                    </h3>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-wrap items-center gap-3 md:gap-6 text-[#183282] text-6xl md:text-8xl font-extrabold">
                    <h2 className="flex items-center gap-3 md:gap-5">
                        <span><img className="mt-[8px] md:mt-[12px] w-[36px] md:w-[90px]" src={arrow} alt="arrow icon" /></span>catching
                    </h2>
                    <h3>brands</h3>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                <p className="text-lg md:text-xl w-[327px] md:w-[440px] text-[#183282]  font-normal leading-6 md:leading-8">
                    Empower your franchisees and locations to grow with our intelligent dashboards and tools.
                </p>
                <button className="btn w-full md:w-[164px] bg-gradient-to-r from-[#FF9A63] to-[#FE804B] text-white text-sm font-normal leading-6 mt-8 md:mt-16">
                    Contact us
                </button>
            </div>
        </div>
    );
};

export default Banner;
