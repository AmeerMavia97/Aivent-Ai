import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <section className='relative overflow-hidden px-20 py-40 bg-blue 
                            bg-[url("/assets/testimonialsparallaximage.webp")] bg-cover bg-center bg-fixed'>
            <div className="absolute -top-20 -left-20 w-[140%] h-[25%] z-50 bg-gradient-to-b blur-2xl from-[#102136] to-[#102136]"></div>

            <div className="absolute inset-0 bg-[#000000]  opacity-50 
                  transition-all duration-500"></div>

            <div className='flex relative z-50 py-10'>
                <div className='relative w-[36%]'>
                    <Image width={310} height={450} className='rounded-[9px]' src={"/assets/s9.webp"} alt="testimonial" />
                    <div className='bg-skyBlue absolute px-4 rounded-[10px] top-4 right-16 py-4'>
                        <Quote className='size-10 text-white' />
                    </div>
                </div>

                <div className='w-[64%] flex flex-col justify-center'>
                    <p className='font-Manrope font-[700] text-[32px] leading-[48px] 
                                  bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] 
                                  bg-clip-text text-transparent'>
                        “Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.”
                    </p>

                    <h4 className='font-Manrope mt-5 text-[17.5px] text-white font-semibold'>
                        Elon Musk
                    </h4>
                </div>


            </div>

             <div className="absolute -bottom-28 -left-20 w-[140%] h-[30%] z-50 bg-gradient-to-b blur-2xl from-[#102136] to-[#102136]"></div>
        </section>
    )
}

export default Testimonials
