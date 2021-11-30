//jshint esversion:6
import React from "react";

import Navbar from "../../src/components/navbar.jsx";
import Sixes from "../../src/images/sixes.png";

export default function Goodies() {
  return (
    <>
    <Navbar />
    <div class="row">
    <div class="col-lg-6">
      <section id="bio">
        <h1>Biography</h1>
        <div class="container-fluid bio">
          <p>My name is Collin Hooper. Born in the late 90s in Grand Rapids, Michigan, I find myself learning all I possibly can about front- and backend development and applying that knowledge to my expanding portfolio of projects. I always knew
            that I would end up working with technology, but I was quite meandering and wayward in my search, not knowing I wanted to be a programmer until I was two years out of college.</p>
          <p>Rockford High School offered a lot of resources to budding professionals, like a strong foreign language department, but unfortunately did not offer much in the way of computer science of programming. Originally, I wanted to be in the
            CIA, and figured my knack for learning foreign languages would be conducive to that dream. Holding myself to the strict code that potential employees can find on the CIA's website, I yearned for the experience of travelling to foreign
            lands, and because I was learning the language, my eyes were set on Germany. First, I wanted to do a year abroad in high school, but because I would still have had to repeat a year upon my return, that option became invalid. I figured I
            would try for a year abroad again while I was attending college; after all, I was planning on studying foreign languages at an in-state university. After speaking with my German teacher and a year of obtaining particular certifications,
            it was clear that I could and would attend a German university for the entirety of my degree.</p>
          <p>I was an American in Germany, and a German student of Political Science. Here I had my first experience with programming (RStudio), playing guitar, and many of the other things that I enjoy to this day. I went to Germany seeking a path
            into the CIA, still unsure about whether that was the proper arena for my talents. After experiencing more of the world, I am now certain that software development is my industry-of-choice upon which to make an impact.</p>
        </div>
      </section>
    </div>
    <div class="col-lg-6 col-sm-12">
      <section id="music">
        <h1>Goodies & Extras</h1>
        <p></p>
        <div class="row">
          <div class="col">
            <a href="https://soundcloud.com/user-228624729" target="_blank">
              <div class="container-fluid">
                <img class="img-fluid" src={Sixes} alt="" />
              </div>
              <h3>Sixes EP - 2019</h3>
            </a>
              <h4>
                <a href="https://soundcloud.com/user-228624729/mr-bones" target="_blank">Mr. Bones</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/track-one-composition-in-b" target="_blank">Track One - Composition in B Minor</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/so-much-to-do" target="_blank">So Much to Do</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/see-me-now" target="_blank">See Me Now</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/when-the-time-comes" target="_blank">When the Time Comes</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/the-water-song" target="_blank">The Water Song</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/track-two" target="_blank">Track Two</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/i-got-mine" target="_blank">I Got Mine</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/untitled" target="_blank">Untitled</a>
              </h4>
          </div>
        </div>
      </section>
    </div>
  </div>
  </>
  )
};
