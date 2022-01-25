//jshint esversion:6

import React from "react";
import AboutPic from "../images/me1.png";
import sill from "../images/me-white-sill.png";

export default function About() {
  return (
    <div id="about-container" className="container-fluid">
    <div id="aboutme" className="container-fluid">
      <div className="row d-flex flex-wrap align-items-center">
        <div className="col-lg-6 col-sm-12">
          <h2 className="jane">A little bit about me...</h2>
          <h5 className="about-text">Goodness, where to even begin... I am a twenty-something year old web designer, musician, nature-lover, and so many other things. I have many diverse interests, including pre-history, space, physics and natural sciences, music, and more! If I am not programming, I am either making music, watching documentaries or hockey or football, or spending time with family and friends or plants and animals.</h5>
          <h5 className="about-text">As far as software development goes, lately I have been focusing on user-interface design and user experience. I am sharpening my skills to make truly beautiful websites with proprietary code. I am also learning backend processes and frameworks, like Node.js and Express! If you have an idea for a project, I would love to hear about it!</h5>
        </div>
        <div className="col-lg-6 col-sm-12">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={AboutPic} class="d-block mx-auto" alt="..." />
  </div>
  <div class="carousel-item">
    <img src={sill} class="d-block mx-auto" alt="..." />
  </div>
</div>
</div>
        </div>
      </div>
    </div>
    </div>
  )
};
