import React from "react";
import {PicApp} from "../App.js";
import SingleSource from "../App.js";

function Home () {
  return (
    <>
    <a id="home">
      <div className="logo-container">
        <img src="images/logo.png" />

        <h3 className="pink">"Jag ska blir so Satans skyhög."</h3>
      </div>
    </a>

    <div className="grid-container">

      <a id="What_is_SKYHØGA?">
        <div className="first section">
          <h3>
            What is SKYHØGA?
          </h3>
          <p>
            SKYHØGA is an idea for a Darknet-hosted, secure mobile platform intended for
            arranging face-to-face transactions between consenting parties wishing to take part in buying and/or selling cannabis-products.
            The service would first and foremost exist to enable its users to easily circumvent prohibiton in areas where such laws are being enforced.
          </p>
        </div>
      </a>

        <div className="second section">
          <PicApp
          images={[
            {src:"images/login1.png", imgStyle: { width: "220px", height: "auto", borderRadius: '2%', border: '1px solid white', margin: '25px', filter: 'drop-shadow(.5rem .5rem .5rem rgb(255, 77, 166, 0.5))' }},
            {src:"images/login2.png", imgStyle: { width: "220px", height: "auto", borderRadius: '2%', border: '1px solid white', margin: '25px', filter: 'drop-shadow(.5rem .5rem .5rem rgb(255, 77, 166, 0.5))' }}

          ]}/>
        </div>

      <a id="Our_mission">
        <div className="third section">
          <h3>
            Our mission
          </h3>
          <p>
            In addition to undermining archaic legislation we want to do our part in reducing the uncertainty
            associated with darknet trading as well as to promote a safe
            marketplace by establishing a peer-driven user rating
            system, which includes both the sellers and the buyers using the service.
            Our goal is to make the service as transparent & as accesible as possible for everyone.
          </p>
        </div>
      </a>

        <div className="fourth section">


        </div>

      <a id="Show_your_upport">
        <div className="fifth section">
          <h3>
            Show your support
          </h3>

          <p>
            The best way to show your support is to register an account and
            start using our service. Buyer profiles are priced at 15 euros,
            payble in Bitcoin to address mentioned in the registering form.
            Seller profiles are priced at 300 euros to incentivize honest
            conduct and discourage burning accounts. All proceeds are used to
            run and develop the service, excess funds are donated yearly to the
            Finnish Cannabis Association.
          </p>

        </div>
      </a>

        <div className="sixth section">
        <PicApp
        images={[
          {src:"images/listings.png", imgStyle: { width: "220px", height: "auto", borderRadius: '2%', border: '1px solid white', margin: '25px', filter: 'drop-shadow(.5rem .5rem .5rem rgb(255, 77, 166, 0.5))' }},
          {src:"images/profile.png", imgStyle: { width: "220px", height: "auto", borderRadius: '2%', border: '1px solid white', margin: '25px', filter: 'drop-shadow(.5rem .5rem .5rem rgb(255, 77, 166, 0.5))' }}

        ]}/>
        </div>

      <a id="About_us">
        <div className="seventh section">
          <h3>
            About us
          </h3>

          <p>
            SKYHØGA is brought to you by a merry group of idealists who believe
            in the right to self-determination over oppressive legislation. We
            wish to extend our personal gratitude towards anyone growing
            something besides a moustache, your efforts are the very foundation
            of our shared cause.
          </p>
        </div>
      </a>

      <div className="eight section">

      <img src="/images/valuess.png"/>

      </div>

    </div></>

  );
  }

export default Home;
