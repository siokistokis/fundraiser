import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignIn.css';

function SignIn() {

const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen);

}


    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Redirect user to the code page
    const handleRedirectToCodePage = () => {
    navigate('/code');

  };

  // Handle email sign-in submission
    const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      handleRedirectToCodePage();
    }
  };

    return (

        
        <div className="signin-container">
             
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
                    <li><Link className="signIn" to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
                </ul>
            </nav>  

      
            <form onSubmit={handleSubmit}>
                <h2 id="welcome">WELCOME</h2>
                <p id="paragraph">Login to continue</p>
                <button type="button" className="google-signin" onClick={handleRedirectToCodePage}>Continue with Google</button>
                <button type="button" className="apple-signin" onClick={handleRedirectToCodePage}>Continue with Apple</button>
                <hr className="divider"/>
                <input type="email" placeholder="Enter your e-mail" value={email} onChange={(e)=> setEmail(e.target.value)} required/> 
                <button type="submit" className="signin-button">Continue</button>

                <Link to="/" className="back-link">Back to home</Link>

            </form>
            <footer className="footer-to-left">
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>
        </div>
    )
}
export default SignIn;