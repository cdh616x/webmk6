//jshint esversion:6

import React from "react";

let day = new Date();
let hour = day.getHours();
let whatDay = day.getDay();
let whatTime = "";
let word = "happy";

export default function Greeting() {
  if (hour < 8) {
    whatTime = "Good morning early bird!";
    word = "Happy";
  } else if (hour < 12) {
    whatTime = "Good morning;";
  } else if (hour < 18) {
    whatTime = "Good afternoon;";
  } else {
    whatTime = "Good evening;";
  }

  if (whatDay === 0) {
    whatDay = "Sunday";
  } else if (whatDay === 1) {
    whatDay = "Monday";
  } else if (whatDay === 2) {
    whatDay= "Tuesday";
  } else if (whatDay === 3) {
    whatDay = "Wednesday";
  } else if (whatDay === 4) {
    whatDay = "Thursday";
  } else if (whatDay === 5) {
    whatDay = "Friday";
  } else if (whatDay === 6) {
    whatDay = "Saturday";
  }
  return(
  <>
  <div className="container-fluid greeting">
  <h1 className="greeting">{whatTime} {word} {whatDay}!</h1>
  <p className="greeting">I am Collin, a software developer</p>
  <h3>
          <a href="https://github.com/cdh616x/webmk2" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square github" />
          </a>
          ||
          <a href="https://www.linkedin.com/in/collin-hooper-0826b919b/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin github" />
          </a>
        </h3>
  </div>
  </>
)
};
