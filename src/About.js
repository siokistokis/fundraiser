


import React,{useState} from "react";
import { Link } from "react-router-dom";
import './About.css';

function About() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);

    }

    return (
        <div className="about-page">
            <nav className="navbar">
                <div className="logo">Fundation
                    {/* <img src="myIcon.png"></img> */}
                    </div>
                <h3>Welcome to the Art Fundraiser</h3>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link className="about" to="/About" onClick={toggleMenu}>About</Link></li>
          {/* <li><Link to="/Donate" onClick={toggleMenu}>Donate</Link></li> */}
          <li><Link to="/Gallery" onClick={toggleMenu}>NEWS</Link></li>
          <li><Link to="/AdminRegister" onClick={toggleMenu}>Admin</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
          <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
          
        </ul>
            </nav>
            
            {/* Hero Section */}
      <div className="hero">
        <img src={'/helping.jpg'} alt="Fundation - Making a Difference" className="hero-image" />
        <div className="hero-text">
          <h1>About Fundation</h1>
          <h4>Committed to making a difference in people's lives.</h4>
        </div>
      </div>

      {/* About Page Content */}
      <div className="page">

        <h2>Who We Are!</h2>
        <p>Our foundation is dedicated to uplifting communities by supporting various causes, including mentorship, education, and essential aid for underprivileged children. Through our initiatives, we provide food, clothing, and personal care items, ensuring that every child has the opportunity to thrive. We believe in nurturing potential, fostering hope, and creating a lasting impact in the lives of those we serve. Join us in making a difference—one act of kindness at a time.</p> 
        <p>Support beautiful, forward-looking, classical art, art education and also people's creativity. Develop the branches of art with your help and participate in this development.</p>
        <p>Your donation will help fund various art projects. Join us in supporting talented artists! </p>
        <p>Launch a fundraiser to support a cause that matters to you.</p>
        
        <button className="start" onClick={()=>window.location.href='/start'}>Start A GoFundMe</button>
        
        <div className="images">
            <h3>OUR CAUSES</h3>
            <div className="image-pics">
                <div className="polaroid"><img src={'/Woman.jpg'} alt="Cause 1" /></div>
                <div className="polaroid"><img src={'/ballerina.jpg'} alt="Cause 2" /></div>
                <div className="polaroid"><img src={'/clayArt.jpg'} alt="Cause 3"  /></div>
                <div className="polaroid"><img src={'/BG.jpg'} alt="Cause 4" /></div>
                <div className="polaroid"><img src={'/Woman.jpg'} alt="Cause 5" /></div>
                <div className="polaroid"><img src={'/ballerina.jpg'} alt="Cause 6" /></div>
                <div className="polaroid"><img src={'/clayArt.jpg'} alt="Cause 7" /></div>
                <div className="polaroid"><img src={'/BG.jpg'} alt="Cause 8" /></div>
            </div>
        </div>

        <button id="donate" onClick={()=>window.location.href='/Donate'}>Donate</button>

        <section className="user-reviews">
        <h2>What People Say</h2>
        <div className="reviews-container">
            <div className="review-card">
                <h5 className="review-title">GoFundMe has been a lifesaver! </h5>
                <p className="review-text">Their platform made it easy to raise funds for my medical bills, and the support was incredible. I highly recommend it for anyone in need of financial help.</p>
                <p className="review-author">- Chris  </p>
            </div>
            <div className="review-card">
                <h5 className="review-title">Great experience using GoFundMe!</h5>
                <p className="review-text">The site is user-friendly, and the donations came in faster than expected. Customer support was also very responsive and helpful throughout.</p>
                <p className="review-author">- Panelope</p>
            </div>
            <div className="review-card">
                <h5 className="review-title">GoFundMe made fundraising simple!</h5>
                <p className="review-text">I was able to set up a campaign quickly and reach a wide audience. The transparency and security features gave donors confidence to contribute.</p>
                <p className="review-author">- Simon</p>
            </div>
            <div className="review-card">
                <h5 className="review-title">A reliable crowdfunding platform!</h5>
                <p className="review-text">I used GoFundMe for a community project, and the response was amazing. It’s a fantastic way to connect with people who truly care.</p>
                <p className="review-author">- Robert</p>
            </div>
    
        </div>
        </section> 

        {/* <button className="start" id="first">Start A GoFundMe</button> */}

    </div>

    <footer>
        <p>© 2025 Fundation. All Rights Reserved.</p>
    </footer>

    </div>
        
    )
}
export default About