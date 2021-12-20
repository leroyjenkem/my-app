import React from "react";
import ReactDOM from "react-dom";
import Image from "react-image-enlarger";
import './styless.css';


    <div className="navbar">
      <div className="show">>
      <a className="show" href="#home">Home</a>
      <a className="show" href="#first">What is SKYHØGA?</a>
      <a className="show" href="#second">Our mission</a>
      <a className="show" href="#third">Show your support</a>
      <a className="show" href="#fourth">About us</a>
      </div>
    </div>

    <a id="home">
      <div className="logo-container">
        <img src="images/logo.png" />

        <h3 className="pink">"Jag ska blir so Satans skyhög."</h3>
      </div>
    </a>

    <div className="grid-container">

      <a id="first">
        <div className="first section">
          <h3>
            What is SKYHØGA?
          </h3>
          <p>
            SKYHØGA is an idea for a darknet-hosted mobile platform intended for
            arranging f2f meets to buy and sell cannabis products °°
          </p>

        </div>
      </a>

      <a id="second">
        <div className="second section">
          <h3>
            Our mission
          </h3>
          <p>
            We want to do our part in reducing the inherent uncertainty
            associated with darknet trading as well as to promote a safe
            marketplace by the means of establishing a peer-driven user rating
            system including both the sellers and the buyers using the service,
            aiming to make the experience as transparent as possible for all
            parties.
          </p>
        </div>

      </a>
      <a id="third">
        <div className="third section">
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

      <a id="fourth">
        <div className="fourth section">
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

    </div>

  );
}

const images = [
"https://images.unsplash.com/photo-1536012441472-aae6b3ce330f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"https://images.unsplash.com/photo-1542049943447-072b93eb20af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
"https://images.unsplash.com/photo-1510993259919-38e221d3c0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
];

function App() {
return (
 <div style={{ display: "flex" }}>
   {images.map(image => (
     <SingleSource key={image} src={image} />
   ))}
 </div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
