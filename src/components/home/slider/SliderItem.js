import React from "react";
import PropTypes from "prop-types";
// import "./SliderItem.css";

const SliderItem = ({ image, author, title, topic, description, isActive }) => (
    <div className={`item ${isActive ? "active" : ""}`}>
        <img src={image} alt={title} />
        <div className="content">
            <div className="author">{author}</div>
            <div className="title">{title}</div>
            <div className="topic">{topic}</div>
            <div className="des">{description}</div>
            <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>
);

SliderItem.propTypes = {
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default SliderItem;
