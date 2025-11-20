"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const CardData = [
    {
        id: 1,
        image: "/assets/benefits1.jpg",
        title: "Mantener la competitividad",
        desc: "Mantener la competitividad en un entorno empresarial digitalizado."
    },
    {
        id: 2,
        image: "/assets/benefits2.png",
        title: "Máximo el potencial",
        desc: "Aprovechar al máximo el potencial de los datos para decisiones estratégicas."
    },
    {
        id: 3,
        image: "/assets/benefits3.jpg",
        title: "Fomentar la innovación",
        desc: "Fomentar la innovación y el desarrollo de soluciones creativas."
    },
    {
        id: 4,
        image: "/assets/benefits4.jpg",
        title: `Mejorar la retención`,
        desc: "Mejorar la retención del talento al demostrar compromiso con su crecimiento y desarrollo profesional."
    }
];

const BenefitsSection = () => {

    const [openCard, setOpenCard] = useState(null); // 👈 per-card open state

    // Mobile toggle function
    const handleCardClick = (id) => {
        setOpenCard(openCard === id ? null : id);
    };

    return (
        <section className='flex flex-col justify-center items-center bg-blue py-20 pb-32 px-7 sm:px-16'>
            <div className='max-w-[1200px]'>

                {/* heading section ... unchanged */}
                
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 place-content-center mt-10'>

                    {CardData.map((items) => (
                        <div key={items.id} data-aos="img-gutter-only" data-aos-duration="1000" className='w-full'>

                            <div
                                className="relative group w-full h-[320px] sm:h-[370px] overflow-hidden rounded-[12px] cursor-pointer"
                                onClick={() => handleCardClick(items.id)} // 👈 mobile click
                            >

                                {/* IMAGE */}
                                <Image
                                    src={items.image}
                                    alt="l1"
                                    width={570}
                                    height={600}
                                    className="
                                        w-full h-full object-cover rounded-[12px] 
                                        transition-all duration-700 ease-out  
                                        group-hover:scale-110 
                                        sm:group-hover:scale-110
                                        z-0
                                    "
                                />

                                {/* dark dim */}
                                <div className="absolute inset-0 bg-black opacity-20"></div>

                                {/* blue shadow overlay hover/tap */}
                                <div
                                    className={`
                                        absolute inset-0 bg-[#0000005d] blur-2xl shadow-inner-blue 
                                        transition-all duration-500 
                                        group-hover:opacity-100 
                                        ${openCard === items.id ? "opacity-100" : "opacity-0"}
                                    `}
                                ></div>

                                {/* SLIDING OVERLAY CONTENT */}
                                <div
                                    className={`
                                        absolute left-0 w-full px-6 pb-5 sm:pb-8
                                        transition-all duration-700 ease-out 
                                        group-hover:bottom-4
                                        ${openCard === items.id ? "bottom-4" : "bottom-[-100%]"}
                                    `}
                                >
                                    <h1 className="font-Manrope text-[35px] leading-[45px] sm:text-[45px] sm:leading-[56px] font-[600]
                                       bg-gradient-to-t from-[#d3d3d3] to-white bg-clip-text text-transparent">
                                        {items.title}
                                    </h1>

                                    <p className="text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[24px] mt-2 w-[80%]">
                                        {items.desc}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default BenefitsSection;
