import AboutSection from '@/Components/HomeCom/AboutSection'
import BenefitsSection from '@/Components/HomeCom/BenefitsSection'
import ContactUsSection from '@/Components/HomeCom/ContactUsSection'
import HeroSection from '@/Components/HomeCom/HeroSection'
import Testimonials from '@/Components/HomeCom/Testimonials'
import RotatedMarquee from '@/Components/Marquee'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <HeroSection />
        <AboutSection />
        <RotatedMarquee />
        <BenefitsSection />
        <Testimonials/>
        <ContactUsSection/>
      </div>
    </>
  )
}

export default Home