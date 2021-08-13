import React from 'react'

//LAYOUT
import Layout from '../Layout'

//COMPONENTS
import HelpHeader from '../Components/help/Header'
import FAQs from '../Components/help/FAQs'
import CTA from '../Components/CTA'
import ClientBanner from '../Components/ClientBanner'

const HelpPage = () => {
    return (
        <Layout>
            
            <HelpHeader/>

            <ClientBanner/>

            <FAQs/>

            <CTA/>

        </Layout>
    );
}

export default HelpPage