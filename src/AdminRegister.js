import React, { useState } from "react";
import axios from 'axios';
import './AdminRegister.css'; // Ensure this CSS file exists in the src folder
import { Link } from 'react-router-dom';

// const AdminRegister = () => {
//   const [isOpen, setIsOpen] = useState(false); // Define isOpen state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = formData;

//     if (!name || !email || !password || !confirmPassword) {
//       setError('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setError('');
//     setSuccessMessage('Admin registered successfully!');
    
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     });
//   };

//   const toggleMenu = () => {
//     setIsOpen(prevState => !prevState);
//   };

//   return (
//     <div className="admin-register-container">
//       <nav className="navbar">
//         <div className="logo">Fundation</div>
//         <h3>Welcome to the Art Fundraiser</h3>
//         <div className="hamburger" onClick={toggleMenu}>☰</div>
//         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//           <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//           <li><Link className="about" to="/About" onClick={toggleMenu}>About</Link></li>
//           <li><Link to="/Gallery" onClick={toggleMenu}>Gallery</Link></li>
//           <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
//           <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
//           <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
//         </ul>
//       </nav>

//       <h2>Admin Registration</h2>
//       {error && <div className="error-message">{error}</div>}
//       {successMessage && <div className="success-message">{successMessage}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your password"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleInputChange}
//             placeholder="Confirm your password"
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>

//       <footer>
//         <p>© 2025 Fundation. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default AdminRegister;





function AdminRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
      e.preventDefault();
      if (!username || !email || !password || !repeatPassword) {
        setMessage("All fields are required");
        return;
    }

    if (password !== repeatPassword) {
        setMessage("Passwords do not match");
        return;
    }
    try {
        const response = await axios.post("http://localhost:5000/admin/register", { 
            username, 
            email, 
            password, 
            repeatPassword 
        });
        setMessage(response.data.message);
    } catch (error) {
        setMessage("Registration failed: " + (error.response?.data?.error || "Unknown error"));
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
           <li><Link to="/Gallery" onClick={toggleMenu}>NEWS</Link></li>
           <li><Link to="/AdminRegister" className="admin" onClick={toggleMenu}>Admin</Link></li>
           <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
           <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
           <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
         </ul>
       </nav>


          <h2>Admin Registration</h2>
          <form onSubmit={handleRegister}>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <input type="password" placeholder="Repeat Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required />
              
              <button type="submit">Register</button>
              <button className="login" onClick={()=>window.location.href='/AdminLogin'}>Login</button>
          </form>
          {message && <p>{message}</p>}

          <footer className="footer-to-left">
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>
      </div>
  );
}

export default AdminRegister;