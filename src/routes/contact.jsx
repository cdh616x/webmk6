//jshint esversion:6
import React from "react";

import Footer from "../components/footer.jsx";
import Navbar from "../../src/components/navbar.jsx";

export default function Contact() {
  return(
    <>
    <Navbar />
      <h1 className="contact">Send me and email!</h1>
    <Footer />
    </>
  );
}
