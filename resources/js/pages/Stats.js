import React from 'react'

//COMPONENTS
import HeaderSection from '../components/HeaderSection'
import StatContent from '../components/stats/StatContent'

const headerContent = ["Stats", "Take control of your team.", "Start building for free, then add a site plan to go live. Account plans unlock additional features."]

const StatsPage = () => {
    return (
        <div>

            <HeaderSection h2={headerContent[0]} title={headerContent[1]} text={headerContent[2]}/>

            <StatContent/>

        </div>
    );
}

export default StatsPage