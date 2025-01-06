import React from 'react';
import Container from '../../container/Container';
import './ContainerAboutItem1.css';
import { Link } from 'react-router-dom';

const ContainerAboutItem1 = () => {
    return (
        <>
            <Container
                leftContent={[
                    <span key="1">WHO</span>,
                    <p key="2">WE ARE</p>,
                    <p key="3">CREATIVE AGENCY FOR</p>,
                    <h2 key="4">INNOVATIVE BRANDING</h2>
                ]}
                rightContent={[
                    <p key="5">We work with Brands and Start-Ups worldwide. We help brands stand out through powerful, elegant visual designs. Our branding designs are tailored to create unique experiences that leave a lasting impact, driving our partners toward success.</p>,
                    <Link to="/work" key="6">WORKS</Link>
                ]}
                ContainerClasname="container-about1"
            />
        </>
    );
};

export default ContainerAboutItem1;
