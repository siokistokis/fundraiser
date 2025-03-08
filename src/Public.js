import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Public.css'; 
import axios from 'axios';

function Public() {
    const [fundraisers, setFundraisers]= useState([]);
    const [isOpen, setIsOpen]= useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);

    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/fundraisers')
            .then(response => setFundraisers(response.data))
            .catch(error => console.error('Error fetching fundraisers:', error));
    }, []);

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="logo">Fundation</div>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
                    {/* <li><Link to="/Donate" onClick={toggleMenu}>Donate</Link></li> */}
                    <li><Link to="/Gallery" onClick={toggleMenu}>NEWS</Link></li>
                    <li><Link to="/AdminRegister" onClick={toggleMenu}>Admin</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
                    <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
                </ul>
            </nav>

            <h2>Fundraisers</h2>
            <div className="fundraiser-container">
                {fundraisers.length > 0 ? (
                    fundraisers.map(fundraiser => {
                        // Calculate remaining amount
                        const remainingAmount = fundraiser.goalAmount - fundraiser.donatedAmount;
                        const imageUrl = fundraiser.image
                        ? `http://localhost:5000${decodeURIComponent(fundraiser.image)}`
                        : 'https://via.placeholder.com/300'; // Placeholder if no image
                        return (
                            <div key={fundraiser.id} className={`fundraiser-card ${fundraiser.goalAmount === 0 ? 'inactive' : ''}`}>
                                <h3>{fundraiser.title}</h3>
                                <p><strong>Organizer:</strong> {fundraiser.organizer}</p>
                                <p><strong>Cause:</strong> {fundraiser.cause}</p>
                                <p><strong>Description:</strong> {fundraiser.description}</p>
                                <p><strong>Fundraising Goal:</strong> £{fundraiser.goalAmount}</p>
                                <p><strong>Donated Amount:</strong>£{fundraiser.donatedAmount}</p>
                                <p><strong>Remaining Amount:</strong> £{remainingAmount}</p>
                                <p><strong>Started:</strong> {new Date(fundraiser.createdAt).toLocaleDateString()}</p>
                                
                                <img src={imageUrl} alt={fundraiser.title} className="fundraiser-image" />
                                {/* Link to Donate Page */}
                                <Link to={`/FundMePage/${fundraiser.id}`}>
                                    <button disabled={remainingAmount <= 0}>
                                        {remainingAmount <= 0 ? 'Goal Reached' : 'Donate Now'}
                                    </button>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <p>No fundraisers available</p>
                )}
            </div>
            <footer>
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer> 
        </div>
    );
} 
export default Public;