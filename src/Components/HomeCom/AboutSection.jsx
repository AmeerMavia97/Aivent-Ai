import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
   <>
   
    <section className='bg-blue  relative '>
        <div className="absolute -top-20 left-0 w-full h-[30%] z-50 bg-gradient-to-b blur-2xl from-[#102136] to-[#102136]"></div>
       
      <div className='flex justify-center items-center px-13 py-24'>
        <div className='grid grid-cols-2 place-content-center'>
          <div className='flex justify-center'>
            <div className='flex flex-col justify-center gap-6'>
              <p className="text-white font-Manrope font-semibold text-lg md:text-[15px] tracking-[0.2px]">
                <span className='text-skyBlue'>{"["}</span> About the Event  <span className='text-skyBlue'>{"]"}</span>
              </p>
              <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl  md:text-6xl lg:text-[48px]  leading-[56px]">
                A Global Gathering <br /> of AI Innovators
              </h1>

              <p className='text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] w-[80%] '>
                Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity, and the future of work.
              </p>

              <ul className='flex flex-col gap-1.5'>
                <li className='flex font-Manrope gap-2 text-white text-[15.5px] font-[500]'><Check strokeWidth={3} className='text-skyBlue size-5.5' />5 days of keynotes, workshops, and networking</li>
                <li className='flex font-Manrope gap-2 text-white text-[15.5px] font-[500]'><Check strokeWidth={3} className='text-skyBlue size-5.5' />50 world-class speakers</li>
                <li className='flex font-Manrope gap-2 text-white text-[15.5px] font-[500]'><Check strokeWidth={3} className='text-skyBlue size-5.5' />Startup showcase and live demos</li>
              </ul>
            </div>
          </div>

          <div className='flex justify-end items-center'>
            <div className="flex justify-center items-center">
              <Image
                src="/assets/c1.webp"
                alt="Logo"
                width={450}
                height={60}
                className="rotate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
   </>

    
  );
};

export default AboutSection;
