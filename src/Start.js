


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Start.css';
import axios from 'axios';

function Start() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [goalAmount, setGoalAmount] = useState("");
    const [description, setDescription] = useState("");
    const [organizer, setOrganizer] = useState("");
    const [cause, setCause] = useState("");
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleStartFundraiser = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("goalAmount", goalAmount);
        formData.append("description", description);
        formData.append("organizer", organizer);
        formData.append("cause", cause);
        formData.append("donatedAmount", 0);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axios.post("http://localhost:5000/fundraisers", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            setMessage(response.data.message);

            // Redirect to welcome page after 3 seconds
            setTimeout(() => {
                window.location.href = "/Feedback";  // Replace with your actual welcome page URL
            }, 3000); // 3 seconds delay

        } catch (error) {
            setMessage("Failed to start fundraiser");
            console.error(error);
        }
    };

    return (
        <div>
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
                    <li><Link className="start" to="/Start" onClick={toggleMenu}>FundMe</Link></li>
                    <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
                </ul>
            </nav>
            
            <div className="fundraiser-content">

                <div className="left">
                    <h2>Start Your Own Fundraiser</h2>
                </div>

                <div className="fundraiser-form">
                    <form onSubmit={handleStartFundraiser} encType="multipart/form-data">

                        <h3>Create Your Fundraiser</h3>
                        
                        <label htmlFor="title" id="firstelement">Fundraiser Title:</label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                        <label htmlFor="goalAmount">Fundraising Goal (£):</label>
                        <input type="number" id="goalAmount" value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)} required />

                        <label htmlFor="description">Description:</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

                        <label htmlFor="organizer">Your Name:</label>
                        <input type="text" id="organizer" value={organizer} onChange={(e) => setOrganizer(e.target.value)} required />

                        <label htmlFor="cause">Select Cause:</label>
                        <select id="cause" value={cause} onChange={(e) => setCause(e.target.value)} required>
                            
                        <option value="">Select a Cause</option>
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

                        <label htmlFor="image">
                            Upload Image
                        </label>
                        <input type="file" id='image' accept="image/*" onChange={handleImageChange} />

                        <button className="btn-style" type="submit">Start Fundraiser</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>

            </div>
            <footer className="footer-to-left">
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>

        </div>
    );
}

export default Start;







