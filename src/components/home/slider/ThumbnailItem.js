import React from "react";
import PropTypes from "prop-types";
// import "./ThumbnailItem.css";

const ThumbnailItem = ({ image, titleThumb, descriptionThumb, isActive }) => (
    <div className={`item ${isActive ? "active" : ""}`}>
        <img src={image} alt={titleThumb} />
        <div className="content">
            <div className="title">{titleThumb}</div>
            <div className="description">{descriptionThumb}</div>
        </div>
    </div>
);

ThumbnailItem.propTypes = {
    image: PropTypes.string.isRequired,
    titleThumb: PropTypes.string.isRequired,
    descriptionThumb: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default ThumbnailItem;
