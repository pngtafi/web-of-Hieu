import React from 'react';
import './Container.css';

class Container extends React.Component {
    render() {
        const { leftContent, rightContent, ContainerClasname } = this.props;
        return (
            <div className={`container ${ContainerClasname}`}>
                <div className='container-left' >
                    {leftContent.map((child, index) => (
                        <React.Fragment key={index}>{child}</React.Fragment>
                    ))}
                </div>
                <div className='container-right' >
                    {rightContent.map((child, index) => (
                        <React.Fragment key={index}>{child}</React.Fragment>
                    ))}
                </div>
            </div>
        );
    }
}

export default Container;