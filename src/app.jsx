//jshint esversion:6
import React from "react";

import Navbar from "./components/navbar.jsx";
import Greeting from "./components/greeting.jsx";
import About from "./components/about.jsx";
import Programming from "./components/programming.jsx";
import Carousel from "./components/carousel.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div>
    <Navbar />
    <Greeting />
    <About />
    <Programming />
    <Carousel />
    <Footer />
    </div>
  );
}

export default App;
