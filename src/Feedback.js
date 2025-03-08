import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Feedback.css";


function Feedback() {
        const [isOpen, setIsOpen] = useState(false);
      
        // Toggle menu visibility
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
   
    return(

    
    <div className="welcome-container">

        <nav className="navbar">
            <div className="logo">Fundation</div>
            <h3>Welcome to the Art Fundraiser</h3>
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

        <div className="welcome-message">
            <h1>Welcome</h1>
            <p>Thank you for startig fundraiser</p>
        </div>

         <footer>
        <p>© 2025 Fundation. All Rights Reserved.</p>
    </footer>

    </div>

)
 }
    
export default Feedback;