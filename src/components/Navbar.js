import { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../images/img.png";
import {Link} from "react-router-dom";

function Navbar() {
    const [page, setPage] = useState('home');
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const selectMenu = (menu) => {
        setPage(menu);
        setShowMenu(!showMenu)
    }

    return (
        <nav className="navbar">
            <div className="container">
            <div className="logo">
                <Link to="/" ><img src={logo} key="logo"/></Link>                  
            </div>
            <div className="menu" onClick={handleShowMenu}>
                <div className="menuList">
                    <svg width="10%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={`navbar-links  ${showMenu && 'active'}`}>
            <ul>
                <li className={page === 'home' ? 'active' : ''}>
                    <Link to="/" onClick={() => selectMenu('home')}>Início</Link>
                </li>
                <li className={page === 'adoption' ? 'active' : ''}>
                    <Link to="/adoption" onClick={() => selectMenu('adoption')}>Adoção</Link>
                </li>
                <li className={page === 'donation' ? 'active' : ''}>
                    <Link to="/donation" onClick={() => selectMenu('donation')}>Doação</Link>
                </li>
                {
                    sessionStorage.getItem("ADM") ? 
                    <li className={page === 'administration' ? 'active' : ''}>
                        <Link to="/administration" onClick={() => selectMenu('administration')}>Administração</Link>
                    </li> : ""
                }
                {
                    sessionStorage.getItem("ADM") ? "" :
                    <li className='login' onClick={() => { setShowMenu(!showMenu)}}>
                        <Link to="/login" >
                            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#7B3F00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="miter">

                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                <g id="SVGRepo_iconCarrier">

                                    <polyline points="8 7 8 2 20 2 20 22 8 22 8 17" />

                                    <line x1="4" y1="12" x2="16" y2="12" />

                                    <polyline points="12 8 16 12 12 16" />

                                </g>

                            </svg>
                            <p>Login</p>
                        </Link>
                    </li>
                }
            </ul>
        </div>

      </div>
    </nav>
    );
};

export default Navbar;