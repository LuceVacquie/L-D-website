import React from 'react'

//COMPONENTS
import Header from '../Components/Header'
// import Client from '../components/homepage/Clients'
import Content from '../Components/stats/Content'

const headerContent = ["Stats", "Take control of your team.", "Start building for free, then add a site plan to go live. Account plans unlock additional features."]

const StatsPage = () => {
    return (
        <div>

            <Header h2={headerContent[0]} title={headerContent[1]} text={headerContent[2]}/>

            {/* <Client/> */}

            <Content/>

        </div>
    );
}

export default StatsPage