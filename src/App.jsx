import React from 'react'

import Navbar from './Component/Navbar'
import HeroSection from './Component/HeroSection'
import Feature from './Component/Feature'
import Workflow from './Component/Workflow'
import Pricing from './Component/Pricing'
import Testimonials from './Component/Testimonials'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
 
     <Navbar/> 
      <div className='max-w-7xl mx-auto pt-20 px-6 '>
      <HeroSection/>
      </div>
      <Feature/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
      



    </>
  )
}

export default App