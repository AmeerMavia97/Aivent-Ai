import { Section, User } from 'lucide-react'
import React from 'react'
import LevelsCard from '../Cards/LevelsCard'

const LevelsSection = () => {
    return (

        <section className='flex justify-center items-center px-7 sm:px-16 py-7 sm:py-14 bg-blue'>
            <div className='max-w-[1200px] '>

                <div>
                    <div className='flex flex-col justify-center items-center gap-3 text-center'>

                        <h1 data-aos="fade-up"  data-aos-duration="1500" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl  md:text-6xl lg:text-[48px]  leading-[56px]">
                           Niveles
                        </h1>

                        <p data-aos="fade-up"  data-aos-duration="1500" className='text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] sm:w-[60%] '>
                            Nuestros cursos de inteligencia artificial y analítica avanzada para empresas están enfocados a tres diferentes niveles de la organización:
                        </p>

                    </div>

                    <div className='grid sm:grid-cols-3 gap-7 mt-8 px-2 sm:px-6'>
                        <LevelsCard title={"Nivel Ejecutivo o Directivo"} desc={"Programa de Liderazgo en Analítica Avanzada: Talleres con enfoque en liderazgo estratégico y transformación digital."} icon={"/assets/Icons/icons8-team-100.png"}/>
                        <LevelsCard title={"Nivel de Gestión Intermedia o Departamental"} desc={"Certificación en Análisis de Datos para Gerentes: Mejora de habilidades en análisis de datos para la toma de decisiones."} icon={"/assets/Icons/icons8-chart-100.png"}/>
                        <LevelsCard title={"Nivel de Empleados Operativos o de Base"} desc={"Fundamentos de Análisis de Datos: Introducción a conceptos básicos y aplicaciones prácticas."} icon={"/assets/Icons/icons8-search-user-100.png"}/>
                        
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LevelsSection