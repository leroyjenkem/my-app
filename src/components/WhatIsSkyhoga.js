import React from "react";
import {PicApp} from "../App.js";
import '../index.css';

function WhatIsSkyhoga () {
  return (
    <>
    <a id="#section1">
      <div className="first section">
        <h3>
          What is SKYHØGA?
        </h3>
        <p>
          SKYHØGA is an idea for a Darknet-hosted, secure mobile platform for
          arranging face-to-face transactions between consenting parties wishing to engage in trading cannabis-products.
          <br/>The main purpose of the service is to enable its users to easily circumvent prohibiton in areas where such laws are being enforced.
        </p>
      </div>
    </a>

      <div className="second section">
        <PicApp
        images={[
          {src:"images/login1.png", imgStyle: { width: "220px", height: "auto", marginTop: '-.05rem', borderRadius: '2%', border: '1px solid white', margin: '25px', filter: 'drop-shadow(.5rem .5rem .5rem rgb(255, 77, 166, 0.5))' }},
          {src:"images/login2.png", imgStyle: { width: "220px", height: "auto", marginTop: '-.05rem', borderRadius: '2%', border: '1px solid white', margin: '25px', filter: 'drop-shadow(.5rem .5rem .5rem rgb(255, 77, 166, 0.5))' }}

        ]}/>
      </div>
  </>
  )
}

export {WhatIsSkyhoga};
