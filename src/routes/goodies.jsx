//jshint esversion:6
import React from "react";

import Footer from "../components/footer.jsx";
import Navbar from "../../src/components/navbar.jsx";
import Sixes from "../../src/images/sixesep3.png";
import Sixes2 from "../../src/images/sixesep2-edit2.jpg";
import MissSin from "../../src/images/misssin2.png";
import BachArb from "../../src/images/BA.png";
import BachArbDownload from "../../src/pdf/BA-Final.pdf"

export default function Goodies() {
  return (
    <>
    <Navbar />
    <div className="row">
    <div className="col-lg-6">
      <section id="bio">
        <h1>Biography</h1>
        <div className="container-fluid bio">
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
        <h3 className="thesis">If you're interested, here's my Bachelor's thesis!</h3>
        <a href={BachArbDownload}>
        <img src={BachArb} className="img-fluid d-block" alt=""/>
        </a>
      </section>
    </div>
    <div className="col-lg-6 col-sm-12">
      <section id="music">
        <h1>Goodies & Extras</h1>
        <div className="row">
          <div className="col">
            <a href="https://soundcloud.com/user-228624729" target="_blank">
              <div className="container-fluid">
                <img className="img-fluid d-block" src={Sixes} alt="" />
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
              <h5 className="album">This is my freshman album. It was recorded in September and October 2019 and is unmastered. My favorite songs include So Much To Do, the Water Song, I Got Mine, and Untitled.</h5>
              <a href="https://soundcloud.com/user-228624729/sets/three-songs" target="_blank">
                <div className="container-fluid">
                  <img className="img-fluid d-block" src={Sixes2} alt="" />
                </div>
                <h3>Sixes II - 2021</h3>
              </a>
              <h4>
                <a href="https://soundcloud.com/user-228624729/master-fairies?in=user-228624729/sets/three-songs&si=59a0b5ed639b44239a98cc1dff3a733b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">Fairies</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/master-keep-walkin-down-the?in=user-228624729/sets/three-songs&si=517d82c75fdd4a699cd61bce959b7cf1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">Keep Walkin' Down the Road</a>
              </h4>
              <h4>
                <a href="https://soundcloud.com/user-228624729/repeater" target="_blank">Repeater</a>
              </h4>
              <h5 className="album sixes2">Three songs recorded over the period of a year or so...</h5>
          </div>
          <a href="https://soundcloud.com/user-228624729" target="_blank">
            <div className="container-fluid">
              <img className="img-fluid d-block" src={MissSin} alt="" />
            </div>
            <h3>Miss Sinister - 2021</h3>
          </a>
          <h4>
            <a href="https://soundcloud.com/user-228624729/goes-hard" target="_blank">Goes Hard</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/underground" target="_blank">Underground</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/techwah" target="_blank">TechWah</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/sinister" target="_blank">Sinister</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/shrubs" target="_blank">Shrubs</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/go-to-sleep" target="_blank">Go to Sleep</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/harvey" target="_blank">Harvey</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/d" target="_blank">D</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/austria" target="_blank">Austria</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/song-in-a-minor" target="_blank">Song in A Minor</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/the-mexican-groove" target="_blank">The Mexican Groove</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/goes-even-harder" target="_blank">Goes Even Harder</a>
          </h4>
          <h4>
            <a href="https://soundcloud.com/user-228624729/feedback-baby?in=user-228624729/sets/miss-sinister-unfinished-album&si=261ca6444c32497a812b63374e5ad922&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">Feedback, Baby</a>
          </h4>
          <h5 className="album">An unfinished album. Songs vary in their completeness. The album will remain unfinished due to the breakdown of the band, Miss Sinister.</h5>
            </div>
      </section>
    </div>
  </div>
  <Footer />
  </>
  )
};
