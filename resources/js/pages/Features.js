import React from 'react'

//LAYOUT
import Layout from '../Layout'

//COMPONENTS
import Header from '../Components/Header'
import Content from '../Components/features/Content'
import CTA from '../Components/CTA'


const headerContent = ["Features", "Take control of your team.", "Start building for free, then add a site plan to go live. Account plans unlock additional features."]

const FeaturesPage = () => {
    return (
        <Layout>

            <Header h2={headerContent[0]} title={headerContent[1]} text={headerContent[2]}/>

            <Content/>

            <CTA/>

        </Layout>
    );
}

export default FeaturesPage