import React from 'react';
import SliderItem from './SliderItem';
import ThumbnailItem from './ThumbnailItem';
import PropTypes from 'prop-types';
import './slider.css'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.slides = [
            {
                image: "/img1.jpg",
                author: "LUNDEV",
                title: "DESIGN SLIDER",
                titleThumb: " Name Slider",
                descriptionThumb: " Description",
                topic: "ANIMAL",
                description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
            },
            {
                image: "/img2.jpg",
                author: "LUNDEV",
                title: "DESIGN SLIDER",
                titleThumb: " Name Slider",
                descriptionThumb: " Description",
                topic: "ANIMAL",
                description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
            },
            {
                image: "/img3.jpg",
                author: "LUNDEV",
                title: "DESIGN SLIDER",
                titleThumb: " Name Slider",
                descriptionThumb: " Description",
                topic: "ANIMAL",
                description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
            },
            {
                image: "/img4.jpg",
                author: "LUNDEV",
                title: "DESIGN SLIDER",
                titleThumb: " Name Slider",
                descriptionThumb: " Description",
                topic: "ANIMAL",
                description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
            },
        ];
        this.state = {
            currentSlide: 0,
        };
    }

    nextSlide = () => {
        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide + 1) % this.slides.length,
        }));
    };

    prevSlide = () => {
        this.setState((prevState) => ({
            currentSlide:
                (prevState.currentSlide - 1 + this.slides.length) % this.slides.length,
        }));
    };

    render() {
        const { currentSlide } = this.state;

        return (
            <div id="slider">
                {/* List Item */}
                <div className="list">
                    {this.slides.map((slide, index) => (
                        <SliderItem
                            key={index}
                            {...slide}
                            isActive={index === currentSlide}
                        />
                    ))}
                </div>

                {/* Thumbnail Items */}
                <div className="thumbnail">
                    {this.slides.map((slide, index) => (
                        <ThumbnailItem
                            key={index}
                            image={slide.image}
                            title={slide.title}
                            description={slide.description}
                            isActive={index === currentSlide}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <div className="arrows">
                    <button id="prev" onClick={this.prevSlide}>
                        &#8249;
                    </button>
                    <button id="next" onClick={this.nextSlide}>
                        &#8250;
                    </button>
                </div>

                {/* Time Running */}
                <div className="time"></div>
            </div>
        );
    }
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            titleThumb: PropTypes.string.isRequired,
            descriptionThumb: PropTypes.string.isRequired,
            topic: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ),
};

export default Slider;
