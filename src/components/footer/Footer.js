import React from 'react';
import './Footer.css';
import Container from '../container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id='footer'>
            <span>HAVE A PROJECT IN MIND,</span> <span>START YOUR PROJECT NOW!</span>
            <a href='mailto:phungtai99zz@gmail.com'>phungtai99zz@gmail.com</a>
            <div className="scrolling-text">
                <h2>YOUR BRAND, YOUR STORY, OUR DESIGN</h2>
            </div>
            <Container
                leftContent={[
                    <h4 key="1">We love crafting unforgettable digital experiences, brands and websites with people like you.</h4>,
                    <table key="2" style={{ borderCollapse: 'collapse', width: '100%', margin: '20px 30px', textAlign: 'left' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: '15%', opacity: '0.6' }}>Phone</td>
                                <td>0961348177</td>
                            </tr>
                            <tr>
                                <td style={{ width: '15%', opacity: '0.6' }}>Email</td>
                                <td>phungtai99zz@gmail.com</td>
                            </tr>
                            <tr>
                                <td style={{ width: '15%', opacity: '0.6' }}>Address</td>
                                <td>23 Nguyễn Lương Bằng, Thị trấn Thanh Miện, huyện Thanh Miện, tỉnh Hải Dương </td>
                            </tr>
                        </tbody>
                    </table>
                ]}
                rightContent={[
                    <div key="3" className="icons">
                        <a href='https://www.facebook.com/phungtai99zz/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className='icon' />
                        </a>
                        <a href='https://www.instagram.com/phungtai99zz/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className='icon' />
                        </a>
                        <a href='https://www.linkedin.com/in/phungtai99zz/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className='icon' />
                        </a>
                        <a href='https://github.com/phungtai99zz' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className='icon' />
                        </a>
                    </div>
                ]}
                ContainerClasname='container-footer'
            />
        </div>
    );
};

export default Footer;
