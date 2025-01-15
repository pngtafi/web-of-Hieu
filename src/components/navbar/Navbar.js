import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleMenu } from '../../redux/action/navbarAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from './logo.png';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/career', label: 'Career' },
    { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.navbar.isMenuOpen); // Lấy trạng thái menu từ Redux

    const toggleMenuHandler = () => {
        dispatch(toggleMenu()); // Gửi action toggleMenu khi click vào biểu tượng ba gạch
        console.log('Menu toggled:', !isMenuOpen);
    };
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`navbar-container ${isMenuOpen ? 'open' : ''}`}>
                <button className="menu-toggle" onClick={toggleMenuHandler}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} color="white" size="lg" />
                </button>
                <ul className="navbar">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
