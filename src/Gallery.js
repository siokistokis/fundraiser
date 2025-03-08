// import React, {useState, useEffect} from "react";
// import './Gallery.css';
// import { Link } from "react-router-dom";

// import img1 from "./img/aerial.jpg";
// import img2 from "./img/animals.jpg";
// import img3 from "./img/art.jpg";
// import img4 from "./img/ballet.jpg";
// import img5 from "./img/event.jpg";
// import img6 from "./img/gymnastic.jpg";
// import img7 from "./img/music.jpg";
// import img8 from "./img/skating.jpg";
// import img9 from "./img/sport.jpg";
// import img10 from "./img/theatre.jpg";

// // const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];

// const slides = [
//     { image: img1, description: "Explore beautiful art pieces from around the world." },
//     { image: img2, description: "Experience the elegance and passion of ballet performances." },
//     { image: img3, description: "Capture moments through the lens of talented photographers." },
//     { image: img4, description: "Explore beautiful art pieces from around the world." },
//     { image: img5, description: "Experience the elegance and passion of ballet performances." },
//     { image: img6, description: "Capture moments through the lens of talented photographers." },
//     { image: img7, description: "Explore beautiful art pieces from around the world." },
//     { image: img8, description: "Experience the elegance and passion of ballet performances." },
//     { image: img9, description: "Capture moments through the lens of talented photographers." },
//     { image: img10, description: "Explore beautiful art pieces from around the world." }
//     // { image: img11, description: "Experience the elegance and passion of ballet performances." },
//     // { image: img12, description: "Capture moments through the lens of talented photographers." }
// ];

// function Gallery() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     //Function to handle the Next button click
//     const goToNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     };

//     // Function to handle the Previous button click
//     const goToPrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//     };

//     // show menu visability
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

   

//     return (
//         <div className="about-page">
//             <nav className="navbar">
//                 <div className="logo">Fundation</div>
//                 <h3>Welcome to the Art Fundraiser</h3>
//                 <div className="hamburger" onClick={toggleMenu}>☰</div>
//                 <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//                     <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//                     <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
//                     {/* <li><Link to="/Donate" onClick={toggleMenu}>Donate</Link></li> */}
//                     <li><Link className="gallery" to="/Gallery" onClick={toggleMenu} >Gallery</Link></li>
//                     <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
//                     <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
//                     <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
//                 </ul>
//             </nav>

           
//             {/* Slideshow Section */}
//             <div className="slideshow">
//                 <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
//                 <p className="slide-description">{slides[currentIndex].description}</p>
//                 {/* Navigation buttons placed below */}
//                 <div className="slideshow-controls">
//                     <button className="prev" onClick={goToPrev}>❮</button>
//                     <button className="next" onClick={goToNext}>❯</button>
//                 </div>
//             </div>
//             <footer className="footer-to-left">
//                 <p>© 2025 Fundation. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );

    
// }
// export default Gallery;


















































import React, { useState, useEffect } from "react";
import './Gallery.css';
import { Link } from "react-router-dom";

import img1 from "./img/aerial.jpg";
import img2 from "./img/animals.jpg";
import img3 from "./img/art.jpg";
import img4 from "./img/ballet.jpg";
import img5 from "./img/event.jpg";
import img6 from "./img/gymnastic.jpg";
import img7 from "./img/music.jpg";
import img8 from "./img/skating.jpg";
import img9 from "./img/sport.jpg";
import img10 from "./img/theatre.jpg";
import img11 from "./img/Img1.jpg";
import img12 from "./img/Img2.jpg";
import img13 from "./img/Img3.jpg";
import img14 from "./img/Img4.jpg";
import img15 from "./img/Img5.jpg";
import img16 from "./img/Img6.jpg";
import img17 from "./img/Img7.jpg";
import img18 from "./img/Img8.jpg";
import img19 from "./img/Img9.jpg";
import img20 from "./img/Img10.jpg";
import img21 from "./img/Img11.jpg";
import img22 from "./img/Img12.jpg";
import img23 from "./img/Img13.jpg";
import img24 from "./img/Img14.jpg";
import img25 from "./img/Img15.jpg";
import img26 from "./img/Img16.jpg";
import img27 from "./img/Img17.jpg";
import img28 from "./img/Img18.jpg";
import img29 from "./img/Img19.jpg";
import img30 from "./img/Img20.jpg";
import img31 from "./img/Img21.jpg";


const slides = [
    { image: img1, description: "Explore beautiful art pieces from around the world." },
    { image: img2, description: "Experience the elegance and passion of ballet performances." },
    { image: img3, description: "Capture moments through the lens of talented photographers." },
    { image: img4, description: "Explore beautiful art pieces from around the world." },
    { image: img5, description: "Experience the elegance and passion of ballet performances." },
    { image: img6, description: "Capture moments through the lens of talented photographers." },
    { image: img7, description: "Explore beautiful art pieces from around the world." },
    { image: img8, description: "Experience the elegance and passion of ballet performances." },
    { image: img9, description: "Capture moments through the lens of talented photographers." },
    { image: img10, description: "Explore beautiful art pieces from around the world." },
    { image: img11, description: "Explore beautiful art pieces from around the world." },
    { image: img12, description: "Experience the elegance and passion of ballet performances." },
    { image: img13, description: "Capture moments through the lens of talented photographers." },
    { image: img14, description: "Explore beautiful art pieces from around the world." },
    { image: img15, description: "Experience the elegance and passion of ballet performances." },
    { image: img16, description: "Capture moments through the lens of talented photographers." },
    { image: img17, description: "Explore beautiful art pieces from around the world." },
    { image: img18, description: "Experience the elegance and passion of ballet performances." },
    { image: img19, description: "Capture moments through the lens of talented photographers." },
    { image: img20, description: "Explore beautiful art pieces from around the world." },
    { image: img21, description: "Explore beautiful art pieces from around the world." },
    { image: img22, description: "Experience the elegance and passion of ballet performances." },
    { image: img23, description: "Capture moments through the lens of talented photographers." },
    { image: img24, description: "Explore beautiful art pieces from around the world." },
    { image: img25, description: "Experience the elegance and passion of ballet performances." },
    { image: img26, description: "Capture moments through the lens of talented photographers." },
    { image: img27, description: "Explore beautiful art pieces from around the world." },
    { image: img28, description: "Experience the elegance and passion of ballet performances." },
    { image: img29, description: "Capture moments through the lens of talented photographers." },
    { image: img30, description: "Explore beautiful art pieces from around the world." },
    { image: img31, description: "Explore beautiful art pieces from around the world." }
];

function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false); // Add state for gallery dropdown
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="about-page">
            <nav className="navbar">
                <div className="logo">Fundation</div>
                <h3>Welcome to the Art Fundraiser</h3>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/About" onClick={toggleMenu}>About</Link></li>

                     {/* Gallery dropdown menu */}
                     <li 
                        className="gallery"
                        onMouseEnter={() => setIsGalleryOpen(true)}
                        onMouseLeave={() => setIsGalleryOpen(false)}
                    >
                        <span>NEWS ▾</span>
                        {isGalleryOpen && (
                            <ul className="gallery">
                                <li><Link to="/Gallery" onClick={toggleMenu}>Art</Link></li>
                                <li><Link to="/Sport" onClick={toggleMenu}>Sport</Link></li>
                                <li><Link to="/Dance" onClick={toggleMenu}>Dance</Link></li>
                               
                            </ul>
                        )}
                    </li>

                    <li><Link to="/AdminRegister" onClick={toggleMenu}>Admin</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
                    <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>

                   
                </ul>
            </nav>

            {/* Slideshow Section */}
            <div className="slideshow">
                <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
                <p className="slide-description">{slides[currentIndex].description}</p>
                {/* Navigation buttons */}
                <div className="slideshow-controls">
                    <button className="prev" onClick={goToPrev}>❮</button>
                    <button className="next" onClick={goToNext}>❯</button>
                </div>
            </div>

            <footer className="footer-to-left">
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Gallery;







