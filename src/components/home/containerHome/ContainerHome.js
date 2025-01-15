import React, { useState } from 'react';
import Container from '../../container/Container';
import './ContainerHome.css';

const ContainerHome = () => {
    const [openDetail, setOpenDetail] = useState(null); // State để theo dõi thẻ details đang mở

    const handleToggle = (index) => {
        setOpenDetail(openDetail === index ? null : index); // Đóng hoặc mở thẻ details
    };

    return (
        <>
            <Container
                leftContent={[<h2 key="1">WE BUILD BREAK-</h2>, <h2 key="2">THROUGH BRANDS</h2>]}
                rightContent={[
                    <div
                        key="1"
                        className={`toggle-section ${openDetail === 1 ? 'open' : ''}`} // Thêm class "open" khi thẻ mở
                        onClick={() => handleToggle(1)}
                    >
                        <div className="toggle-summary">Branding</div>
                        {openDetail === 1 && (
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        )}
                    </div>,
                    <div
                        key="2"
                        className={`toggle-section ${openDetail === 2 ? 'open' : ''}`} // Thêm class "open" khi thẻ mở
                        onClick={() => handleToggle(2)}
                    >
                        <div className="toggle-summary">Packaging</div>
                        {openDetail === 2 && (
                            <Container
                                leftContent={[<img src='/homeContainer.jpg' alt='' />]}
                                rightContent={[<p>We are a dynamic creative design agency dedicated to delivering innovative solutions.</p>]}
                                customClass="child-container"
                            />
                        )}
                    </div>,
                    <div
                        key="3"
                        className={`toggle-section ${openDetail === 3 ? 'open' : ''}`} // Thêm class "open" khi thẻ mở
                        onClick={() => handleToggle(3)}
                    >
                        <div className="toggle-summary">Editorial Design and Print Production</div>
                        {openDetail === 3 && (
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        )}
                    </div>,
                    <div
                        key="4"
                        className={`toggle-section ${openDetail === 4 ? 'open' : ''}`} // Thêm class "open" khi thẻ mở
                        onClick={() => handleToggle(4)}
                    >
                        <div className="toggle-summary">Digital Experiences</div>
                        {openDetail === 4 && (
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        )}
                    </div>
                ]}
                ContainerClasname="container-home"
            />
        </>
    );
};

export default ContainerHome;
