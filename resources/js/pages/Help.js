import React from 'react'

//COMPONENTS
import HelpHeader from '../components/help/HelpHeader'
import FAQs from '../components/help/FAQs'
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