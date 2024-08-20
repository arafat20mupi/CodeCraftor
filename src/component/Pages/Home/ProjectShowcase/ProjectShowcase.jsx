import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ProjectShowcase() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-28 bg-gray-100">
            {/* Left Section */}
            <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-blue-500 uppercase text-sm tracking-widest mb-2">Projects</h2>
                <h1 className="text-3xl font-bold mb-4">Showcase of our recognized work</h1>
                <p className="text-gray-600 mb-4">
                    Our collaborative approach ensures that we truly understand our clients' unique requirements and challenges.
                </p>
                <ul className="list-none">
                    <li className="flex items-center mb-2">
                        <span className="text-blue-500 mr-2">&#10003;</span> Managed Services and Products
                    </li>
                    <li className="flex items-center mb-2">
                        <span className="text-blue-500 mr-2">&#10003;</span> Flexibility and Adaptability
                    </li>
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">&#10003;</span> Competitive Advantage
                    </li>
                </ul>
            </div>

            {/* Right Section with Swiper */}
            <div className="md:w-1/2 w-full">
                <Swiper
                    watchSlidesProgress={true}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0, // Keep it flat
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true, // Disable shadows for cleaner look
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div
                            className="w-[300px] h-[400px] flex flex-col justify-center items-center text-center p-8 text-white bg-cover bg-center rounded-lg shadow-lg"
                            style={{ backgroundImage: `url('https://swiperjs.com/demos/images/nature-1.jpg')` }}
                        >
                            <h3 className="text-xl font-bold mb-2">E-commerce Platform Development</h3>
                            <p className="text-sm">Creating robust and scalable e-commerce solutions.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="w-[300px] h-[400px] flex flex-col justify-center items-center text-center p-8 text-white bg-cover bg-center rounded-lg shadow-lg"
                            style={{ backgroundImage: `url('https://swiperjs.com/demos/images/nature-2.jpg')` }}
                        >
                            <h3 className="text-xl font-bold mb-2">Software as a Service Integration</h3>
                            <p className="text-sm">Seamlessly integrating SaaS products to optimize business processes.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="w-[300px] h-[400px] flex flex-col justify-center items-center text-center p-8 text-white bg-cover bg-center rounded-lg shadow-lg"
                            style={{ backgroundImage: `url('https://swiperjs.com/demos/images/nature-3.jpg')` }}
                        >
                            <h3 className="text-xl font-bold mb-2">Mobile Platform Development</h3>
                            <p className="text-sm">Innovative mobile solutions for the modern world.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-visible">
                        <div
                            className="w-[300px] h-[400px] flex flex-col justify-center items-center text-center p-8 text-white bg-cover bg-center rounded-lg shadow-lg"
                            style={{ backgroundImage: `url('https://swiperjs.com/demos/images/nature-4.jpg')` }}
                        >
                            <h3 className="text-xl font-bold mb-2">Custom Analytics Solutions</h3>
                            <p className="text-sm">Data-driven insights for better decision making.</p>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>
        </div>
    );
}
