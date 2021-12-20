import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Image from "react-image-enlarger";
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home/>
      <Footer></Footer>
    </div>
  );
}

export default App;

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
