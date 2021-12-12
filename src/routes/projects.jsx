//jshint esversion:6
import React from "react";

import Footer from "../components/footer.jsx"

import Navbar from "../../src/components/navbar.jsx";
import Andy from "../images/andy-site.png";
import Ski from "../images/sss.png";
import Drum from "../images/drumkit.png";
import Grower from "../images/grower.png";

export default function Projects() {
  return(
    <>
     <Navbar />
      <section id="links">
      <div className="container-fluid proj">
        <h1>Projects</h1>
        <p>
          <a href="https://cdh616x.github.io/andy/" target="_blank">Andy Shaw Illustrations</a>
        </p>
        <p>
          <a href="https://cdh616x.github.io/grower/" target="_blank">Grower's Edge</a>
        </p>
        <p>
          <a href="https://cdh616x.github.io/skis-sub-shop/" target="_blank">Ski's Sub Shop</a>
        </p>
        <p>
          <a href="https://cdh616x.github.io/drumkit/" target="_blank">Online Drum Kit</a>
        </p>
      </div>
    </section>
    <section id="img">
      <div className="container-fluid">
        <a href="https://github.com/cdh616x/andy" target="_blank">
          <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
        </a>
        <a href="https://cdh616x.github.io/andy/" target="_blank" rel="noreferrer">
          <img className="img-fluid" src={Andy} alt="" />
        </a>
      </div>
      <div class="container-fluid">
        <a href="https://github.com/cdh616x/grower" target="_blank" rel="noreferrer">
          <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
        </a>
        <a href="https://cdh616x.github.io/grower/" target="_blank">
          <img className="img-fluid" src={Grower} alt="" />
        </a>
      </div>
      <div class="container-fluid">
        <a href="https://github.com/cdh616x/skis-sub-shop" target="_blank" rel="noreferrer">
          <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
        </a>
        <a href="https://cdh616x.github.io/skis-sub-shop/" target="_blank">
          <img className="img-fluid" src={Ski} alt="" />
        </a>
      </div>
      <div className="container-fluid">
        <a href="https://github.com/cdh616x/drumkit" target="_blank">
          <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
        </a>
        <a href="https://cdh616x.github.io/drumkit/" target="_blank">
          <img className="img-fluid bottom" src={Drum} alt="" />
        </a>
      </div>
    </section>
    <Footer />
    </>
  );
}
