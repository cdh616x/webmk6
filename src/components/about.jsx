import React from "react";
import AboutPic from "../images/me1.png"

export default function About() {
  return (
    <div class="container-fluid">
      <div class="row d-flex flex-wrap align-items-center">
        <div class="col-lg-6 col-sm-6">
          <h2 class="jane">A little bit about me...</h2>
          <h5>Goodness, where to even begin... I am a twenty-something year old web designer, musician, nature-lover, and so much more. I have many diverse interests, including pre-history, space and the physics that were used to slap this universe together, music, and many more. If I am not programming, I am either making music, watching documentaries or hockey or football, or spending time with family and friends or plants and animals.</h5>
        </div>
        <div class="col-lg-6 col-sm-6">
          <img class="crossing img-fluid" src={AboutPic} alt="" />
        </div>
      </div>
    </div>
  )
};
