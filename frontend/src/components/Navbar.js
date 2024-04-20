import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import CSS file for styling (optional)
import logo from "../images/img.png"
import {Link} from "react-router-dom"

function Navbar() {
    // State to manage the active state of navbar items
    const [page, setPage] = useState('home');

    return (
        <nav className="navbar">
            <div className="logo">
                <img  src={logo}/>
            </div>
            <ul className="navbar-links">
                <li className={page === 'home' ? 'active' : ''}>
                    <Link to="/" onClick={() => setPage('home')}>Home</Link>
                </li>
                <li className={page === 'adoption' ? 'active' : ''}>
                    <Link to="/adoption" onClick={() => setPage('adoption')}>Adoção</Link>
                </li>
                <li className={page === 'about' ? 'active' : ''}>
                    <Link to="/about" onClick={() => setPage('about')}>Doação</Link>
                </li>
                {true ? <li className={page === 'adm' ? 'active' : ''}>
                    <Link to="/adm" onClick={() => setPage('adm')}>Administração</Link>
                </li> : ""
                }
            </ul>
            <div className='login'>
                <Link to="/login" >Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;