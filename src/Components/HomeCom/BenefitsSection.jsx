"use client"
import Image from 'next/image'
import React from 'react'
const CardData = [
    {
        id: 1,
        image: "/assets/l1.webp",
        title: "Mantener la competitividad",
        desc: "Mantener la competitividad en un entorno empresarial digitalizado."
    },
    {
        id: 2,
        image: "/assets/l1.webp",
        title: "Optimizar procesos",
        desc: "Impulsar la eficiencia operativa mediante el uso de IA y automatización."
    },
    {
        id: 3,
        image: "/assets/l1.webp",
        title: "Innovación continua",
        desc: "Acelerar la innovación con soluciones basadas en datos."
    },
    {
        id: 4,
        image: "/assets/l1.webp",
        title: `Toma de decisiones  inteligente`,
        desc: "Mejorar decisiones estratégicas basadas en analítica avanzada."
    }
];

const BenefitsSection = () => {
    return (
        <section className='flex flex-col justify-center items-center bg-blue py-20 pb-32 px-16 '>
            <div className='flex flex-col justify-center items-center gap-3 text-center'>
                <p className="text-white font-Manrope font-semibold text-lg md:text-[15px] tracking-[0.2px]">
                    <span className='text-skyBlue'>{"["}</span> Beneficios   <span className='text-skyBlue'>{"]"}</span>
                </p>
                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl  md:text-6xl lg:text-[48px]  leading-[56px]">
                    Para tu empresa
                </h1>

                <p className='text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] w-[60%] '>
                    Potencia tu empresa con formación In-Company en inteligencia artificial y analítica avanzada para impulsar la innovación y la eficiencia.
                </p>

            </div>

            <div className='grid grid-cols-2 gap-10 place-content-center mt-10'>

                {CardData.map((items, index) => (
                 <div key={items.id} className="relative group  h-[370px] overflow-hidden rounded-[12px]  cursor-pointer card ">

                        <Image
                            src={items.image}
                            alt="l1"
                            width={570}
                            height={600}
                            className="w-full h-full object-cover rounded-[12px] 
               transition-all duration-700 ease-out  group-hover:scale-110 
               "
                        />
                        <div className="absolute inset-0 bg-[#000000]  opacity-20 
                  transition-all duration-500"></div>

                        <div className="absolute inset-0 bg-[#0000005d]  shadow-inner-blue opacity-0 
                  transition-all duration-500 group-hover:opacity-100 blur-2xl"></div>

                        <div className="absolute bottom-[-100%] left-0 w-full px-6 pb-8
                  transition-all duration-700 ease-out 
                  group-hover:bottom-4">
                            <h1 className="font-Manrope text-[45px] leading-[56px] font-[600]
                   bg-gradient-to-t from-[#d3d3d3] to-white bg-clip-text text-transparent">
                                {items.title}
                            </h1>

                            <p className="text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[24px] mt-2 w-[80%]">
                                {items.desc}
                            </p>
                        </div>
                    </div>   
                ))}

            </div>
        </section>
    )
}

export default BenefitsSection