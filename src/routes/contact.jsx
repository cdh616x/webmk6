//jshint esversion:6
import React from "react";

import Footer from "../components/footer.jsx";
import Navbar from "../../src/components/navbar.jsx";

export default function Contact() {
  return(
    <>
    <Navbar />
      <h1 className="contact">More elegant looking page coming soon!</h1>
      <a href="mailto:cdhprof@gmail.com">
      <h2 className="contact">In the mean-time, shoot me an email by clicking here!</h2>
      </a>
    <Footer />
    </>
  );
}
