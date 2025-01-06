import React from 'react';
import SliderAbout from './sliderAbout/SliderAbout';
import ContainerAboutItem1 from './containerAbout/ContainerAboutItem1';

class About extends React.Component {
    render() {
        return (
            <div>
                <SliderAbout />
                <ContainerAboutItem1 />
            </div>
        );
    }
}

export default About;