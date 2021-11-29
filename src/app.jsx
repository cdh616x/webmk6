//jshint esversion:6
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Greeting from "./components/greeting.jsx";
import About from "./components/about.jsx"

function App() {
  return (
    <div>
    <Navbar />
    <Greeting />
    <About />
    </div>
  );
}

export default App;
