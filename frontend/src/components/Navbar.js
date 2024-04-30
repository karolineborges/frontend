import { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../images/img.png";
import {Link} from "react-router-dom";
import ListMenu from './SVG';

function Navbar() {
    const [page, setPage] = useState('home');
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="navbar">
            <div className="container">
            <div className="logo">
                  <img src={logo} />
            </div>
            <div className="menu" onClick={handleShowMenu}>
                <ListMenu></ListMenu>
            </div>
            <div className={`navbar-links  ${showMenu && 'active'}`}>
            <ul>
                <li className={page === 'home' ? 'active' : ''}>
                    <Link to="/" onClick={() => setPage('home')}>Home</Link>
                </li>
                <li className={page === 'adoption' ? 'active' : ''}>
                    <Link to="/adoption" onClick={() => setPage('adoption')}>Adoção</Link>
                </li>
                <li className={page === 'donation' ? 'active' : ''}>
                    <Link to="/donation" onClick={() => setPage('donation')}>Doação</Link>
                </li>
                    {sessionStorage.getItem("ADM") ? <li className={page === 'administration' ? 'active' : ''}>
                    <Link to="/administration" onClick={() => setPage('administration')}>Administração</Link>
                </li> : ""
                }
            </ul>
        </div>
        {
            sessionStorage.getItem("ADM") ? "" : 
            <div className='login'>
                <Link to="/login" >Login</Link>
            </div>
        }
      </div>
    </nav>
    );
};

export default Navbar;