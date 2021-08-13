import React from 'react'

//LAYOUT
import Layout from '../Layout'

//COMPONENTS
import Features from '../Components/homepage/Features'
import ClientBanner from '../Components/homepage/Clients'
import TestimonialsCarousel from '../Components/homepage/TestimonialsCarousel'
import Stats from '../Components/homepage/Stats'
import HeroCarousel from '../Components/homepage/HeroCarousel'
import CTA from '../Components/CTA'
import PerfectFor from '../Components/homepage/PerfectFor'


const Homepage = ()=> {
  return (
    <Layout>
        <div className="w-screen h-screen flex justify-center relative top-0">
            <HeroCarousel/>
        </div>

        <ClientBanner/>

        <Features/>

        <PerfectFor/>

        <TestimonialsCarousel/>

        <Stats/>

        <CTA/>
        
    </Layout>
    
  )
}

export default Homepage



