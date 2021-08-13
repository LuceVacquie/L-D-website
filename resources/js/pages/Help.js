import React from 'react'

//COMPONENTS
import HelpHeader from '../components/help/Header'
import FAQs from '../components/help/FAQs'
import CTA from '../components/CTA'
import ClientBanner from '../components/ClientBanner'

const Help = () => {
    return (
        <div>
            
            <HelpHeader/>

            <ClientBanner/>

            <FAQs/>

        </div>
    );
}

export default Help