import React from "react";
import {PicApp} from "../App.js";

function ShowYourSupport () {
  return (
    <>
    <a id="Show_your_upport">
      <div className="fifth section">
        <h3>
          Show your support
        </h3>

        <p>
          The best way to show your support is to register an account and
          start using our service. Buyer profiles are priced at 15 €, while
          Seller profiles are priced at 300 € to incentivize honest
          conduct and discourage burning accounts.<br/>
          All proceeds are used to run and develop the service,
          excess funds are donated yearly to the Finnish Cannabis Association.
        </p>

      </div>
    </a>

      <div className="sixth section">
      <PicApp
      images={[
        {src:"images/listings.png", imgStyle: { width: "220px", height: "auto", marginTop: '-.05rem', borderRadius: '2%', border: '1px solid white', margin: '25px', filter: 'drop-shadow(.5rem .5rem .5rem rgb(255, 77, 166, 0.5))' }},
        {src:"images/profile.png", imgStyle: { width: "220px", height: "auto", marginTop: '.1rem', borderRadius: '2%', border: '1px solid white', margin: '25px', filter: 'drop-shadow(.5rem .5rem .5rem rgb(255, 77, 166, 0.5))' }}

      ]}/>
      </div>
  </>
  )
}

export default ShowYourSupport;
