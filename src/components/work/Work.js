import React from 'react';
import SliderWork from './sliderWork/SliderWork';
import ContainerWork from './containerWork/ContainerWork';
class Work extends React.Component {
    render() {
        return (
            <div>
                <SliderWork />
                <ContainerWork />
            </div>
        );
    }
}

export default Work;