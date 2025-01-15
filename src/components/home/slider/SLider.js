import React, { useState, useEffect } from 'react';
import SliderItem from './SliderItem';
import ThumbnailItem from './ThumbnailItem';
import PropTypes from 'prop-types';
import './slider.css';

const Slider = () => {
    const slides = [
        {
            image: "/img1.jpg",
            author: "LUNDEV",
            title: "DESIGN SLIDER 1",
            titleThumb: "Name Slider 1",
            descriptionThumb: "Description 1",
            topic: "ANIMAL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            image: "/img2.jpg",
            author: "LUNDEV",
            title: "DESIGN SLIDER 2",
            titleThumb: "Name Slider 2",
            descriptionThumb: "Description 2",
            topic: "ANIMAL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            image: "/img3.jpg",
            author: "LUNDEV",
            title: "DESIGN SLIDER 3",
            titleThumb: "Name Slider 3",
            descriptionThumb: "Description 3",
            topic: "ANIMAL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            image: "/img4.jpg",
            author: "LUNDEV",
            title: "DESIGN SLIDER 4",
            titleThumb: "Name Slider 4",
            descriptionThumb: "Description 4",
            topic: "ANIMAL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Tự động chuyển sau 5 giây
        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, []); // Lắng nghe thay đổi của currentSlideIndex

    const getThumbnailOrder = () => {
        const orderedThumbnails = [...slides];
        const rotateSlides = [...orderedThumbnails.slice(currentSlideIndex), ...orderedThumbnails.slice(0, currentSlideIndex)];
        return rotateSlides;
    };

    const thumbnails = getThumbnailOrder();
    const currentThumbnail = thumbnails[thumbnails.length - 1];

    return (
        <div id="slider">
            {/* List Item */}
            <div className="list">
                <SliderItem
                    image={currentThumbnail.image} // Hình ảnh từ phần tử cuối cùng trong thumbnails
                    author={slides[currentSlideIndex].author}
                    title={slides[currentSlideIndex].title}
                    description={slides[currentSlideIndex].description}
                    isActive
                />
            </div>

            {/* Thumbnail Items */}
            <div className="thumbnail">
                {thumbnails.map((slide, index) => (
                    <ThumbnailItem
                        key={index}
                        image={slide.image}
                        titleThumb={slide.titleThumb}
                        descriptionThumb={slide.descriptionThumb}
                        isActive={index === thumbnails.length - 1} // Phần tử cuối là ảnh hiện tại
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
