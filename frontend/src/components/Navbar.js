import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import CSS file for styling (optional)
import logo from "../images/img.png"

function Navbar() {
    // State to manage the active state of navbar items
    const [activeItem, setActiveItem] = useState('home');

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <ul className="navbar-links">
                <li className={activeItem === 'home' ? 'active' : ''}>
                    <a href="#" onClick={() => setActiveItem('home')}>Home</a>
                </li>
                <li className={activeItem === 'about' ? 'active' : ''}>
                    <a href="#" onClick={() => setActiveItem('about')}>Sobre</a>
                </li>
                <li className={activeItem === 'adoption' ? 'active' : ''}>
                    <a href="#" onClick={() => setActiveItem('adoption')}>Adoção</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;