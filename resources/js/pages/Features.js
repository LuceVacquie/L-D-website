import React from 'react'

//COMPONENTS
import HeaderSection from '../components/HeaderSection'
import FeaturesContent from '../Components/features/FeaturesContent'


const headerContent = ["Features", "Take control of your team.", "Start building for free, then add a site plan to go live. Account plans unlock additional features."]

const FeaturesPage = () => {
    return (
        <div>

            <HeaderSection h2={headerContent[0]} title={headerContent[1]} text={headerContent[2]}/>

            <FeaturesContent/>

        </div>
    );
}

export default FeaturesPage