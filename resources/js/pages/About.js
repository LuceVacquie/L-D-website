import React from 'react';
// import FeaturesContent from '../components/features/FeaturesContent'
import HeaderSection from '../components/HeaderSection'

const headerContent = ["About us", "This is who we are.", "Convallis feugiat et aliquet pellentesque dictum nisi, velit. Egestas fermentum adipiscing risus quam ac consectetur mattis turpis tristique."]

const About = () => {
    return (
        <div>
            <HeaderSection h2={headerContent[0]} title={headerContent[1]} text={headerContent[2]}/>
            {/* <FeaturesContent/> */}
        </div>
    );
}

export default About;