import AboutSection from '@/Components/HomeCom/AboutSection'
import HeroSection from '@/Components/HomeCom/HeroSection'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <HeroSection />
        <AboutSection />
      </div>
    </>
  )
}

export default Home