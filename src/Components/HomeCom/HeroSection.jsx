'use client';
import { Calendar, MapPin } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen md:min-h-max lg:min-h-screen pb-52 pt-36 w-full flex justify-center  items-center overflow-hidden ">

            <div className='max-w-8xl'>
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


            <div data-aos="zoom-out"  data-aos-duration="2000"  data-aos-delay="1000" className="relative z-30 flex flex-col items-center justify-center text-center mt-21 gap-2 sm:gap-0 h-full px-4  "> 
                
                <p className="text-white font-Manrope font-semibold text-[16.5px] md:text-[15px] mb-2  tracking-[0.2px]">
                    <span className='text-skyBlue'>{"["}</span> y analítica avanzada
                    In-company <span className='text-skyBlue'>{"]"}</span>
                </p>

                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-semibold text-[37px] sm:text-[42px] uppercase md:text-5xl lg:text-[72px] mb-3 leading-tight">
                    Certificaciones y diplomados <br />  de inteligencia artificial
                </h1>
               

                <div className="flex flex-col mt-5 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a
                        href="#section-tickets"
                        className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none"
                    >
                        Más información
                    </a>
                   
                </div>
            </div>


            <div className="absolute -bottom-28 -left-20 w-[140%] h-[30%] z-50 bg-gradient-to-b blur-2xl from-[#102136] to-[#102136]"></div>
            </div>

        </section>
    );
};

export default HeroSection;
