import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import {WhatIsSkyhoga} from './WhatIsSkyhoga'
import OurMission from './OurMission'
import ShowYourSupport from './ShowYourSupport'
import AboutUs from './AboutUs'
import Footer from './Footer'
import LogoContainer from './LogoContainer'




function Header () {
    return (
    <>
    <HashRouter>
    <div>
      <header>
      <div className="navbar">
      <nav>
        <ul>
            <li className="show"><NavLink to="/">Home</NavLink></li>
            <li className="show"><NavLink to="./WhatIsSkyhoga/#section1">What is SKYHØGA?</NavLink></li>
            <li className="show"><NavLink to="/OurMission">Our mission</NavLink></li>
            <li className="show"><NavLink to="/ShowYourSupport">Show your support</NavLink></li>
            <li className="show"><NavLink to="/AboutUs">About us</NavLink></li>
        </ul>
      </nav>



      </div>
      </header>
      <div className="Content">
      <Routes>
        <Route exact path="/" element={<LogoContainer />} />
        <Route exact path="/WhatIsSkyhoga" element={<WhatIsSkyhoga />} />
        <Route exact path="/OurMission" element={<OurMission />} />
        <Route exact path="/ShowYourSupport" element={<ShowYourSupport />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
      </Routes>


      </div>
      </div>

    </HashRouter>
    </>
  );
}


export default Header;
