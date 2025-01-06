import React, { Component } from 'react';
import './ContainerWork.css';
import images from '../../imagesData';

class ContainerWork extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'all',
            activeIndex: 0,
            showAnimation: true,
        };

        this.images = images;
    }

    setFilter = (filter, index) => {
        console.log("Filter:", filter, "Index:", index);
        this.setState({ filter, activeIndex: index, showAnimation: false }, () => {
            setTimeout(() => this.setState({ showAnimation: true }), 50);
        });
    };

    handleClick = (index) => {
        this.setState({ activeIndex: index });
    };

    render() {
        const { filter, activeIndex, showAnimation } = this.state;
        const items = ['All', 'Branding', 'Motion', 'Packaging', 'Social', 'Website'];

        const filteredImages = filter === 'all'
            ? this.images
            : this.images.filter((img) =>
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
                            onClick={() => {
                                this.setFilter(item.toLowerCase(), index);
                            }}
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
    }
}

export default ContainerWork;
