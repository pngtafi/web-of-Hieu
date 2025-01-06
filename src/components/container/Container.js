import React from 'react';
import './Container.css';

const Container = ({ leftContent, rightContent, ContainerClasname }) => (
    <div className={`container ${ContainerClasname}`}>
        <div className='container-left'>
            {leftContent.map((child, index) => (
                <React.Fragment key={index}>{child}</React.Fragment>
            ))}
        </div>
        <div className='container-right'>
            {rightContent.map((child, index) => (
                <React.Fragment key={index}>{child}</React.Fragment>
            ))}
        </div>
    </div>
);

export default Container;
