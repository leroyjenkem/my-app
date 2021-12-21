import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Link
} from "react-router-dom";
import {WhatIsSkyhoga} from './components/WhatIsSkyhoga'
import OurMission from './components/OurMission'
import ShowYourSupport from './components/ShowYourSupport'
import AboutUs from './components/AboutUs'
import LogoContainer from './components/LogoContainer'
import Footer from './components/Footer'

const rootElement = document.getElementById("root");
render(

  <HashRouter>
  <LogoContainer />


          <div className="grid-container">



  <Routes>
  <Route path="/" element={<App />}>
    <Route path="/WhatIsSkyhoga" element={<><App /><WhatIsSkyhoga /></>} />
    <Route path="/OurMission" element={<OurMission />} />
    <Route path="/ShowYourSupport" element={<ShowYourSupport />} />
    <Route path="/AboutUs" element={<AboutUs />} />
  </Route>
  </Routes>
  </div>,


  <Footer />
  </HashRouter>,

  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
