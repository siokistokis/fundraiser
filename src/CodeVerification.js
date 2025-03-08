// import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import './CodeVerification.css';

// function CodeVerification() {
//     const [countryCode, setCountryCode]=useState('+1');
//     const [phoneNumber, setPhoneNumber]=useState('');
//     const [otp, setOtp]= useState('');
//     const [otpSent, setOtpSent]= useState(false);
//     const navigate = useNavigate();

//     //simulate sending otp
//     const handleSendOtp= () => {
//         if (phoneNumber) {
//             setOtpSent(true);
//             alert(`OTP Sent to ${countryCode} ${phoneNumber}`);

//         }
//     }; 
//     //simulate otp varification
//     const handleVerifyOtp=() => {
//         if (otp==='123456') {
//             alert('Phone number verfyed');
//             navigate('/Public');
//         } else {
//             alert('ivalid Otp');

//         };

//         return(
//             <div className="code-container">
//                 <h2>Verify Your Phone Numbert</h2>

//                 {!otpSent ? (
//                     <div className="phone-input">
//                         <label>Country Code:</label>
//                         <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
//                         <option value="+1">🇺🇸 +1 (USA)</option>
//                         <option value="+44">🇬🇧 +44 (UK)</option>
//                         <option value="+91">🇮🇳 +91 (India)</option>
//                         <option value="+254">🇰🇪 +254 (Kenya)</option>
//                         <option value="+61">🇦🇺 +61 (Australia)</option>
//                         <option value="+370">🇦🇺 +370 (Lithuania)</option>
//                         </select>
                        
//                         <input
//                         type="tel"
//                         placeholder="Enter phone number"
//                         value={phoneNumber}
//                         onChange={(e) => setPhoneNumber(e.target.value)}
//                         required
//                         />

//                         <button className="send-otp-button" onClick={handleSendOtp}>Send OTP</button>
//                     </div>
//                   ) : (
//                     <div className="otp-input">
//                         <p>Enter the OTP sent to {countryCode} {phoneNumber}</p>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             maxLength="6"
//             required
//           />
//           <button onClick={handleVerifyOtp} className="verify-otp-button">Verify & Sign In</button>
//                     </div> 
//                 )}
//             </div>
//         );
//     }

// }  

// export default CodeVerification;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CodeVerification.css'; // Ensure to style the form
import { Link } from 'react-router-dom';

function CodeVerification() {
  const [countryCode, setCountryCode] = useState('+1'); // Default to US
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  // Simulate sending an OTP (Replace with real API integration)
  const handleSendOtp = () => {
    if (phoneNumber) {
      setOtpSent(true);
      alert(`OTP sent to ${countryCode} ${phoneNumber}`); // Placeholder alert
    }
  };

  // Simulate OTP verification (Replace with real authentication logic)
  const handleVerifyOtp = () => {
    if (otp === '123456') { // Placeholder OTP for testing
      alert('Phone number verified. Signed in successfully!');
      navigate('/Public'); // Redirect to dashboard after sign-in
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const [isOpen, setIsOpen] = useState(false);
 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (

    
    <div className="code-container">

        <nav className="navbar">
            <div className="logo">Fundation</div>
              <h3>Welcome to the Art Fundraiser</h3>
            <div className="hamburger" onClick={toggleMenu}>☰</div>
         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
           <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
           <li><Link className="about" to="/About" onClick={toggleMenu}>About</Link></li>
           <li><Link to="/Gallery" onClick={toggleMenu}>NEWS</Link></li>
           <li><Link to="/AdminRegister" onClick={toggleMenu}>Admin</Link></li>
           <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
           <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
           <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
         </ul>
       </nav>



      <h2>Verify Your Phone Number</h2>

      {!otpSent ? (
        <div className="phone-input">
          <label>Country Code:</label>
          <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
            <option value="+1">🇺🇸 +1 (USA)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
            <option value="+91">🇮🇳 +91 (India)</option>
            <option value="+254">🇰🇪 +254 (Kenya)</option>
            <option value="+61">🇦🇺 +61 (Australia)</option>
            <option value="+370">🇦🇺 +370 (Lithuania)</option>
          </select>

          <input
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <button onClick={handleSendOtp} className="send-otp-button">Send OTP</button>
        </div>
      ) : (
        <div className="otp-input">
          <p>Enter the OTP sent to {countryCode} {phoneNumber}</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength="6"
            required
          />
          <button onClick={handleVerifyOtp} className="verify-otp-button">Verify & Sign In</button>
          
        </div>
      )}

    <footer>
        <p>© 2025 Fundation. All Rights Reserved.</p>
    </footer>
    </div>
  );
}

export default CodeVerification;