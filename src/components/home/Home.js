import React from 'react';
import Slider from './slider/SLider';
import FeatureWorks from './featureWorks/FeatureWorks';
import { Link } from 'react-router-dom';
import ContainerHome from './containerHome/ContainerHome';
import './Home.css';

class Home extends React.Component {
    render() {
        const logos = [
            ["/logobrand1.svg", "/logobrand2.svg", "/logobrand3.svg", "/logobrand4.svg", "/logobrand5.svg"],
            ["/logobrand6.svg", "/logobrand7.svg", "/logobrand8.svg", "/logobrand9.svg", "/logobrand10.svg"]
        ];
        return (
            <div style={{ backgroundColor: '#000' }}>
                <Slider />
                <div className='video-home'>
                    <video
                        src="https://86creative.vn/wp-content/uploads/2024/09/86_website-clip_1080p_1.mp4"
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <FeatureWorks />
                <div className='link-to-about'>
                    <p>Great design has no expiration date. It lasts for years and inspires instantly. Our creative freedom enables us to spend more time on fewer projects and focus on the intellectual, functional, and artistic aspects of business. Looking to create profound ideas, timeless design, and beauty in everyday.</p>
                    <Link to="/about">ABOUT US</Link>
                </div>
                <div className='logos-brand'>
                    <p>WE PARTNER WITH</p>
                    <h1>BRANDS WE BELIVE IN</h1>
                    <div className='logos-brand-list'>
                        {logos.map((group, groupIndex) => (
                            <div key={groupIndex} className="logos-brand-item">
                                {group.map((logo, logoIndex) => (
                                    <img key={logoIndex} src={logo} alt={`Logo ${logoIndex + 1}`} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <ContainerHome />
            </div>
        );
    }
}

export default Home;