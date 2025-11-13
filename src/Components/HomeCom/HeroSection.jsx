'use client';
import { Calendar, MapPin } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen pb-40 pt-36 w-full overflow-hidden">

            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-[120%] object-cover"
            >
                <source src="/video/2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-[30%] z-20 bg-gradient-to-b blur-2xl from-[#5676f68c] to-[#5676f61a]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[100%] z-20 bg-gradient-to-b from-[#5676f696] to-[#000000a4]"></div>


            <div className="relative z-30 flex flex-col items-center justify-center text-center mt-21 h-full px-4  ">
                <p className="text-white font-Manrope font-semibold text-lg md:text-[15px] mb-2  tracking-[0.2px]">
                    <span className='text-skyBlue'>{"["}</span> The Future of Intelligence  <span className='text-skyBlue'>{"]"}</span>
                </p>
                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-semibold text-4xl uppercase md:text-6xl lg:text-[117px] mb-6 leading-tight">
                    AI Summit 2025
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6 text-white">
                    <div className="flex items-center space-x-3">
                        <Calendar className="text-skyBlue" />
                        <span className='font-Manrope font-bold text-[20.5px]'>October 1–5, 2025</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MapPin className="text-skyBlue" />
                        <span className='font-Manrope font-bold text-[20.5px]'>San Francisco, CA</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a
                        href="#section-tickets"
                        className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-6 py-2.5 rounded-md select-none"
                    >
                        Get Tickets
                    </a>
                    <a
                        href="#section-schedule"
                        className="bg-transparent border  font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-6 py-2.5 rounded-md select-none"
                    >
                        View Schedule
                    </a>
                </div>
            </div>


            <div className="absolute -bottom-20 left-0 w-full h-[30%] z-50 bg-gradient-to-b blur-2xl from-[#102136] to-[#102136]"></div>

        </section>
    );
};

export default HeroSection;
