import React, {Suspense, useState, useEffect} from "react";
import './index.css';
import ReactDOM from "react-dom";
import Image from "react-image-enlarger";
import Header from './components/Header'
import Footer from './components/Footer'
import LogoContainer from './components/LogoContainer'
import Home from './components/Home'
import WhatIsSkyhoga from './components/WhatIsSkyhoga'
import OurMission from './components/OurMission'
import ShowYourSupport from './components/ShowYourSupport'
import AboutUs from './components/AboutUs'
import AnchorHome from './containers/AnchorHome'

import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  NavLink,
  Routes ,
  Link
} from "react-router-dom";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize.width < 1000;
}


export default function App() {

  const isMobile = useWindowSize()

  return (
    <div className="App app-container ">
    <Suspense fallback={<p>Loading</p>}/>
        <BrowserRouter>
          {isMobile && <nav className="navbar">
            <ul>
                <li className="show"><NavLink to="/">Home</NavLink></li>
                <li className="show"><NavLink to="/home">What is SKYHØGA?</NavLink></li>
                <li className="show"><NavLink to="/our-mission">Our mission</NavLink></li>
                <li className="show"><NavLink to="/show-support">Show your support</NavLink></li>
                <li className="show"><NavLink to="/about">About us</NavLink></li>
            </ul>
          </nav>}
          <Routes >
            {isMobile ? <>
              <Route path='/welcome' element={<OurMission />} />
              <Route path='/' element={<WhatIsSkyhoga />} />
              <Route path='/home' element={<WhatIsSkyhoga />} />
              <Route path='/show-support' element={<ShowYourSupport />} />
              <Route path='/our-mission' element={<OurMission />} />
              <Route path='/about' element={<AboutUs />} />
              </>
              :
              <>
              <Route path='/' exact element={<><AnchorHome /></>} />

              </>
            }

          </Routes >
  </BrowserRouter>
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

/*
const rootElement = document.getElementById("root");
ReactDOM.render(<PicApp />, rootElement);
*/
