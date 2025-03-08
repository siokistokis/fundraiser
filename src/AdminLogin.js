import React, { useState } from "react";
import axios from 'axios';
import './AdminRegister.css'; 
import { Link } from 'react-router-dom';


function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/admin/login", { username, password });
            setMessage(response.data.message);
            // Redirect or handle successful login logic here
            setMessage("Login successful! Redirecting...");
            setTimeout(() => {
                window.location.href = "/AdminDashboard";
            }, 2000);
        } catch (error) {
            setMessage("Login failed: " + error.response.data.error);
        }
    };

    const [isOpen, setIsOpen] = useState(false);
 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div>

        <nav className="navbar">
            <div className="logo">Fundation</div>
              <h3>Welcome to the Art Fundraiser</h3>
            <div className="hamburger" onClick={toggleMenu}>☰</div>
         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
           <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
           <li><Link className="about" to="/About" onClick={toggleMenu}>About</Link></li>
           <li><Link to="/Gallery" onClick={toggleMenu}>Gallery</Link></li>
           <li><Link to="/AdminRegister" onClick={toggleMenu}>Admin</Link></li>
           <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
           <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
           <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
         </ul>
       </nav>



            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}




            <footer className="footer-to-left">
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default AdminLogin;