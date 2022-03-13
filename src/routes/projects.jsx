//jshint esversion:6
import React from "react";

import Footer from "../components/footer.jsx";

import Navbar from "../../src/components/navbar.jsx";
import Andy from "../images/andy-site.png";
import Ski from "../images/sss.png";
import Drum from "../images/drumkit.png";
import Grower from "../images/grower2.png";

export default function Projects() {
  return(
    <>
     <Navbar />
      <section id="links">
      <div className="container-fluid proj">
        <h1 className="projects">Project Links</h1>
        <p>
          <a href="https://clscribe.herokuapp.com/" target="_blank" rel="noreferrer">CLScribe (Cover Letter Writer)</a>
        </p>
        <p>
          <a href="https://morning-refuge-84284.herokuapp.com/" target="_blank" rel="noreferrer">Tafel (Personal Message Board App)</a>
        </p>
        <p>
          <a href="https://cdh616x.github.io/andy-react/" target="_blank" rel="noreferrer">Andy Shaw Illustrations</a>
        </p>
        <p>
          <a href="https://cdh616x.github.io/grower-react/" target="_blank" rel="noreferrer">Grower's Edge</a>
        </p>
        <p>
          <a href="https://cdh616x.github.io/skis-sub-shop/" target="_blank" rel="noreferrer">Ski's Sub Shop</a>
        </p>
        <p>
          <a href="https://cdh616x.github.io/drumkit/" target="_blank" rel="noreferrer">Online Drum Kit</a>
        </p>
      </div>
    </section>
    <section id="img">
      <div className="container-fluid mern">
       <a href="https://github.com/cdh616x/CLScribe-flask" target="_blank" rel="noreferrer">
        <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
       </a>
       <h3>CLScribe is my first Flask application. The backend was built using Python; it compiles the user's input into a .docx document (Word or Pages) and allows the user
       to the download a new file with the user's input separated into appropriate paragraphs and ready to send to potential employers.</h3>
      </div>
      <div className="container-fluid mern">
      <a href="https://github.com/cdh616x/tafel" target="_blank" rel="noreferrer">
        <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
      </a>
        <h3>Tafel is a personal message board application. I am currently using Tafel as a simple add and delete checklist but plan to continue development in the realm of user authentication and personal datapools for different users, so one can see their own Tafel, not just mine! - https://morning-refuge-84284.herokuapp.com/ - Tafel is my first full stack application. It utilizes Nodejs and Express to serve data to the frontend, composed of Pug templates, and the MongoDB database that stores the information for the app (username and message).</h3>
      </div>
      <div className="container-fluid">
        <a href="https://github.com/cdh616x/andy-react" target="_blank" rel="noreferrer">
          <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
        </a>
        <a href="https://cdh616x.github.io/andy-react/" target="_blank" rel="noreferrer">
          <img className="img-fluid" src={Andy} alt="" />
        </a>
      </div>
      <div class="container-fluid">
        <a href="https://github.com/cdh616x/grower-react" target="_blank" rel="noreferrer">
          <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
        </a>
        <a href="https://cdh616x.github.io/grower-react/" target="_blank" rel="noreferrer">
          <img className="img-fluid" src={Grower} alt="" />
        </a>
      </div>
      <div class="container-fluid">
        <a href="https://github.com/cdh616x/skis-sub-shop" target="_blank" rel="noreferrer">
          <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
        </a>
        <a href="https://cdh616x.github.io/skis-sub-shop/" target="_blank" rel="noreferrer">
          <img className="img-fluid" src={Ski} alt="" />
        </a>
      </div>
      <div className="container-fluid">
        <a href="https://github.com/cdh616x/drumkit" target="_blank" rel="noreferrer">
          <h3><i className="fab fa-github-square"><h5>Source Code</h5></i></h3>
        </a>
        <a href="https://cdh616x.github.io/drumkit/" target="_blank" rel="noreferrer">
          <img className="img-fluid bottom" src={Drum} alt="" />
        </a>
      </div>
    </section>
    <Footer />
    </>
  );
}
