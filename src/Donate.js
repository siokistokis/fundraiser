

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Donate.css';

function FundMePage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">Fundation</div>
                <h3>Welcome to the Art Fundraiser</h3>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/Donate" onClick={toggleMenu}>Donate</Link></li>
                    <li><Link to="/Gallery" onClick={toggleMenu}>NEWS</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
                    <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
                </ul>
            </nav>

            {/* Main Page Content */}
            <div className="fundraiser-content">
                Donate

                <form className="donate-form">
                    <h3>Join us in supporting the arts!</h3>
                    <p>Choose a sphere, branch or section of art, please:</p>
                    <select id="donationAmount">
                        <option value="">Select a branch</option>
                        <option value="Aerial">Aerial</option>
                        <option value="Art">Art</option>
                        <option value="Ballet">Ballet</option>
                        <option value="Circus">Circus</option>
                        <option value="Dance">Dance</option>
                        <option value="Education">Education</option>
                        <option value="Gymnastics">Gymnastics</option>
                        <option value="Music">Music</option>
                        <option value="Pets">Pets</option>
                        <option value="Painting">Painting</option>
                        <option value="Photography">Photography</option>
                        <option value="Sport">Sport</option>
                        <option value="Skating">Skating</option>
                        <option value="Theatre">Theatre</option>
                          
                    </select>

                    <label htmlFor="donationAmount">Select Amount to Donate:</label>
                    <select id="donationAmount">
                        <option value="10">10 GBP</option>
                        <option value="25">25 GBP</option>
                        <option value="50">50 GBP</option>
                        <option value="75">75 GBP</option>
                        <option value="100">100 GBP</option>
                    </select>

                    <button className="btn-style">Donate Now</button>
                </form>

                <div className="support-art">
                    <p>We are truly grateful for the support of our generous donors. Your contributions help provide the tools and resources for the next generation of artists. Together, we can make the art world flourish and create meaningful change.</p>
                    <h3>Thank you for your help and continued support!</h3>
                </div>
            </div>

            <footer className='ftr'>
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default FundMePage;










































































