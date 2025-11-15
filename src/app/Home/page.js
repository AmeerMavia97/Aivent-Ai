import Footer from '@/Components/Footer/Footer'
import AboutSection from '@/Components/HomeCom/AboutSection'
import BenefitsSection from '@/Components/HomeCom/BenefitsSection'
import ContactUsSection from '@/Components/HomeCom/ContactUsSection'
import HeroSection from '@/Components/HomeCom/HeroSection'
import InfoSection from '@/Components/HomeCom/InfoSection'
import ServiceSection from '@/Components/HomeCom/ServiceSection'
import Testimonials from '@/Components/HomeCom/Testimonials'
import GlobalNetworkingCard from '@/Components/HomeCom/WhyAttend'
import RotatedMarquee from '@/Components/Marquee'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='overflow-hidden'>
        <HeroSection />
        <AboutSection />
        <RotatedMarquee />
        <BenefitsSection />
        <ServiceSection/>
        <GlobalNetworkingCard/>
        <Testimonials/>
        <ContactUsSection/>
        <InfoSection/>
         <Footer />
      </section>
    </>
  )
}

export default Home