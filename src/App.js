

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cube from './Cube';
import Menu from './Menu';
import Gallery from './Gallery';
import About from './About';
import SignIn from './SignIn';
import Donate from './Donate';
import Contact from './Contact';
import Start from './Start';
import Feedback from './Feedback';
import Response from './Response';
import CodeVerification from './CodeVerification';
import Public from './Public';
import FundMePage from './FundMePage';
import Sport from './Sport';
import Dance from './Dance';
import AdminRegister from './AdminRegister';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes for Pages */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Background */}
                <div className="background">
                  {/* Cubes */}
                  <Cube />
                </div>
                {/* Home */}
                {/* Animated Text */}
                <div className="animated-text">
                  <p className="text1">FUNDATION support CHARITY donation <br/>Welcome To The Art Fundraiser</p>
                  <p className="text2">fundation SUPPORT charity DONATION <br/>Welcome To The Art Fundraiser</p>
                  <p className="text3">FUNDATION support CHARITY donation <br/>Welcome To The Art Fundraiser</p>
                  <p className="text4">fundation SUPPORT charity DONATION <br/>Welcome To The Art Fundraiser</p>
                  <p className="text5">FUNDATION support CHARITY donation <br/>Welcome To The Art Fundraiser</p>
                </div>

                <div className='art'>
                <p className="art">ART</p>
                </div>

                {/* Menu Component */}
                <Menu />
              </>
            }
          />

        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Start" element={<Start/>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/Response" element={<Response/>} />
        <Route path="/code" element={<CodeVerification/>} />
        <Route path="/Public" element={<Public/>} />
        <Route path="/FundMePage/:id" element={<FundMePage/>} />
        <Route path="/Sport" element={<Sport/>} />
        <Route path="/Dance" element={<Dance/>} />
        <Route path="/AdminRegister" element={<AdminRegister/>} />
        <Route path="/AdminLogin" element={<AdminLogin/>} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        </Routes> 
        

      </div>
    </Router>
  );


}

export default App;



