import React, { useState } from 'react';
import SliderItem from './SliderItem';
import ThumbnailItem from './ThumbnailItem';
import PropTypes from 'prop-types';
import './slider.css';

const Slider = () => {
    const slides = [
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

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div id="slider">
            {/* List Item */}
            <div className="list">
                {slides.map((slide, index) => (
                    <SliderItem
                        key={index}
                        {...slide}
                        isActive={index === currentSlide}
                    />
                ))}
            </div>

            {/* Thumbnail Items */}
            <div className="thumbnail">
                {slides.map((slide, index) => (
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
                <button id="prev" onClick={prevSlide}>
                    &#8249;
                </button>
                <button id="next" onClick={nextSlide}>
                    &#8250;
                </button>
            </div>

            {/* Time Running */}
            <div className="time"></div>
        </div>
    );
};

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
