import React from 'react'

//COMPONENTS
import PriceDisplay from '../components/pricing/PriceDisplay'
import PriceDetails from '../components/pricing/PriceDetails'
import CTA from '../components/CTA'
import ClientBanner from '../components/ClientBanner'


const Pricing = ()=> {
  
  return (
    <div>

        <PriceDisplay/>
        
        <ClientBanner/>

        <PriceDetails/>
        
    </div>
    
  )
}

export default Pricing