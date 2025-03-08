

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Menu.css';

const Menu = () => {
    // Checks whether the Menu is currently open or not
    const [isOpen, setIsOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
    
        <div className="menu-container">
            
            { /* Left: Hamburger Icon */}
            <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            
            { /* Center: Buttons */}
            <div className="top-buttons">
                {/* Sign In Button linked to /signin route */}
                <Link to="/signin">
                    <button className="sign-in-btn">Sign In</button>
                </Link>
            
                    <button onClick={() => window.location.href = '/start'} className="fundme-btn">Start FundMe Project</button>


            </div>

            { /* Side Menu */}
            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><Link to="/About">About</Link></li>

                    
                    <li className="gallery-menu"
                        onMouseEnter={() => setIsGalleryOpen(true)}
                        onMouseLeave={() => setIsGalleryOpen(false)}
                    >
                        <span>NEWS ▾</span>
                        {isGalleryOpen && (
                            <ul className="gallery-dropdown">
                                <li><Link to="/Gallery">Art</Link></li>
                                <li><Link to="/Sport">Sport</Link></li>
                                <li><Link to="/Dance">Dance</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/AdminRegister">Admin</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li onClick={() => window.location.href = '/Start'}><Link to="/Start">FundMe</Link></li>
                    <li><Link to="/SignIn">SignIn</Link></li>
                </ul>
            
            </nav>
            
        </div>
    );
};

export default Menu;



