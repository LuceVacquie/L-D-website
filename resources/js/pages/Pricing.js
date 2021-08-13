import React from 'react'

//LAYOUT
import Layout from '../Layout'

//COMPONENTS
import PriceDisplay from '@/Components/pricing/PriceDisplay'
import PriceDetails from '../Components/pricing/PriceDetails'
import CTA from '../Components/CTA'
import ClientBanner from '@/Components/ClientBanner'


const Pricing = ()=> {
  
  return (
    <Layout>

        <PriceDisplay/>
        
        <ClientBanner/>

        <PriceDetails/>

        <CTA/>
        
    </Layout>
    
  )
}

export default Pricing