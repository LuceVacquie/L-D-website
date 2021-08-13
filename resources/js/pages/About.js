import React from 'react';
import Content from '../components/features/Content'
import CTA from '../components/CTA'
import Header from '../components/Header'

const headerContent = ["About us", "This is who we are.", "Convallis feugiat et aliquet pellentesque dictum nisi, velit. Egestas fermentum adipiscing risus quam ac consectetur mattis turpis tristique."]

const About = () => {
    return (
        <div>
            <Header h2={headerContent[0]} title={headerContent[1]} text={headerContent[2]}/>
            <Content/>
        </div>
    );
}

export default About;