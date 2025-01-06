import React from 'react';
import { NavLink } from 'react-router-dom';
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
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
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
        </header>
    );
};

export default Navbar;
