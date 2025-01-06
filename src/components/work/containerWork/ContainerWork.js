import React, { useState } from 'react';
import './ContainerWork.css';
import images from '../../imagesData';

const ContainerWork = () => {
    const [filter, setFilter] = useState('all');
    const [activeIndex, setActiveIndex] = useState(0);
    const [showAnimation, setShowAnimation] = useState(true);

    const items = ['All', 'Branding', 'Motion', 'Packaging', 'Social', 'Website'];

    const handleFilter = (filter, index) => {
        console.log("Filter:", filter, "Index:", index);
        setFilter(filter);
        setActiveIndex(index);
        setShowAnimation(false);
        setTimeout(() => setShowAnimation(true), 50);
    };

    // const handleClick = (index) => {
    //     setActiveIndex(index);
    // };

    const filteredImages = filter === 'all'
        ? images
        : images.filter((img) =>
            Array.isArray(img.category)
                ? img.category.includes(filter)
                : img.category === filter
        );

    const groupedImages = Array(4).fill().map((_, groupIndex) =>
        filteredImages.filter((_, index) => index % 4 === groupIndex)
    );

    console.log('Filter:', filter);
    console.log('Filtered Images:', filteredImages);
    console.log("Rendering with Active Index:", activeIndex);

    return (
        <div className="container-work">
            <ul className="navbar-container-work">
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleFilter(item.toLowerCase(), index)}
                        className={activeIndex === index ? 'active' : ''}
                        style={{
                            opacity: activeIndex === index ? 1 : 0.5,
                            cursor: 'pointer',
                            transition: 'opacity 0.3s',
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className={`image-gallery ${showAnimation ? 'show-animation' : ''}`}>
                {groupedImages.map((group, groupIndex) => (
                    <div key={groupIndex} className={`image-group image-group-${groupIndex}`}>
                        {group.map((img) => (
                            <div
                                key={img.id}
                                className={`image-item image-item-${img.id}`}
                                style={{ animation: 'showUp 2s ease-in', animationDelay: '0s', }}
                            >
                                <img src={img.src} alt={`anh ${img.id}`} className="image" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContainerWork;
