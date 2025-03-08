

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Contact.css';
import axios from 'axios';

function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/contact", formData);
            setSubmitted(true);

                // Redirect to welcome page after 3 seconds
        setTimeout(() => {
            window.location.href = "/Response";  // Replace with your actual welcome page URL
        }, 3000); // 3 seconds delay


        } catch (error) {
            console.error("Error sending message:", error);
        }
    };



    return (
        <div className="contact-page">
            {/* Navbar */}
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
                    <li><Link className="contact" to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
                    <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
                </ul>
            </nav>

            <div className="contact-page">
                <h3>Contact Us</h3>
                <p>If you have any questions or inquiries, please feel free to reach out to us!</p>

            
                {/* Contact Form */}
                <div className="contact-form">
                    {submitted ? (
                        <p className="success-message">Thank you for reaching out! We'll get back to you soon.</p>
                    ) : (
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />  
                            </div>

                           <div>
                           <label htmlFor="message">Message:</label>
                           <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                           </div>

                            <button type="submit" id='submit' className="btn-submit">Send Message</button>
                        </form>
                    )}
                </div>



                <div className='contact-details'>
                    <p>Also, you can contact us by:  </p>
                Phone Number: <a href='tel:+44721156463'>+44 (0)721156463 </a>
                Email:<a href='mailto:info@fundraiser.com' className='email'> info@fundraiser.com </a>
                </div>
                

                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/44721156463" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    {/* Add more social media links here */}
                </div>
            </div>

            <footer className="footer-to-left">
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;
