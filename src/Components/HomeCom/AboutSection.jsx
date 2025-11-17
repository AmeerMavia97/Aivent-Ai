import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <>

      <div className='bg-blue relative flex items-center justify-center px-14 '>
        <div className='flex justify-center items-center  py-20 max-w-[1200px]'>
          <div className='grid grid-cols-2 place-content-center'>
            <div className='flex justify-center'>
              <div className='flex flex-col justify-center gap-6'>
                <p className="text-white font-Manrope font-semibold text-lg md:text-[15px] tracking-[0.2px]">
                  <span className='text-skyBlue'>{"["}</span> En Vectux Academy   <span className='text-skyBlue'>{"]"}</span>
                </p>
                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl  md:text-6xl lg:text-[48px]  leading-[56px]">
                 Formamos Organizaciones  <br /> Data Driven
                </h1>

                <p className='text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] w-[90%] '>
                  Impartimos certificaciones y cursos de inteligencia artificial y analítica avanzada para empresas, con formación de alto impacto liderada por expertos certificados de prestigiosas instituciones como el MIT, Harvard, Kellogg, IPADE, ITAM y la Universidad Católica de Chile. Una combinación de excelencia académica y experiencia práctica adaptada a las necesidades de tu negocio.
                </p>

                <div className="flex flex-col mt-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a
                        href="#section-tickets"
                        className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none"
                    >
                        Más información
                    </a>
                   
                </div>

                {/* <ul className='flex flex-col gap-1.5'>
                  <li className='flex font-Manrope gap-2 text-white text-[15.5px] font-[500]'><Check strokeWidth={3} className='text-skyBlue size-5.5' />5 days of keynotes, workshops, and networking</li>
                  <li className='flex font-Manrope gap-2 text-white text-[15.5px] font-[500]'><Check strokeWidth={3} className='text-skyBlue size-5.5' />50 world-class speakers</li>
                  <li className='flex font-Manrope gap-2 text-white text-[15.5px] font-[500]'><Check strokeWidth={3} className='text-skyBlue size-5.5' />Startup showcase and live demos</li>
                </ul> */}
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
      </div>
    </>


  );
};

export default AboutSection;
