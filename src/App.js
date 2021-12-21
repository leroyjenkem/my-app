import React from "react";
import './index.css';
import ReactDOM from "react-dom";
import Image from "react-image-enlarger";
import Header from './components/Header'
import Footer from './components/Footer'
import LogoContainer from './components/LogoContainer'
import {WhatIsSkyhoga} from './components/WhatIsSkyhoga'
import OurMission from './components/OurMission'
import ShowYourSupport from './components/ShowYourSupport'
import AboutUs from './components/AboutUs'
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
    <nav className="navbar">
      <ul>
          <li className="show"><NavLink to="/">Home</NavLink></li>
          <li className="show"><NavLink to="WhatIsSkyhoga">What is SKYHØGA?</NavLink></li>
          <li className="show"><NavLink to="OurMission">Our mission</NavLink></li>
          <li className="show"><NavLink to="ShowYourSupport">Show your support</NavLink></li>
          <li className="show"><NavLink to="AboutUs">About us</NavLink></li>
      </ul>
    </nav>

<Outlet />

</div>






  );
}




function SingleSource({ src, imgStyle = { width: "200px", height: "auto" } }) {
  const [zoomed , setZoomed] = React.useState(false);

  return (
    <>
    <div style={{ margin: "0.25rem" }}>
      <Image
        style={zoomed ? {...imgStyle, zIndex: 9999} : imgStyle}
        zoomed={zoomed}
        src={src}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
        overlayColor={"rgb(195, 105, 151, 0.4)"}
      />
    </div>
    </>
  );
}



export function PicApp({ images = [], children}) {
  return (

    <div style={{ display: "flex" }}>
      {images.map(image => (
        <SingleSource key={image} {...image} />
      ))}
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<PicApp />, rootElement);
