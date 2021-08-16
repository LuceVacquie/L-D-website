import React, { useState } from 'react'

//COMPONENTS
import PriceDisplay from '../components/pricing/PriceDisplay'
import PriceDetails from '../components/pricing/PriceDetails'
// import ClientBanner from '../components/ClientBanner'


const Pricing = ()=> {
  
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

  return (
    <div>

        <PriceDisplay setIsDetailsVisible={setIsDetailsVisible} isDetailsVisible={isDetailsVisible}/>
        
        {/* <ClientBanner/> */}

        {isDetailsVisible && 
          <PriceDetails/>
        }
        
    </div>
    
  )
}

export default Pricing