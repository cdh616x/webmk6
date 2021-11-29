//jshint esversion:6

import React from "react";

let day = new Date();
let hour = day.getHours();
let whatDay = day.getDay();
let whatTime = "";
let currentDay = "";

export default function Greeting() {
  if (hour < 8) {
    whatTime = "Good morning early bird!";
  } else if (hour < 12) {
    whatTime = "Good morning;"
  } else if (hour < 18) {
    whatTime = "Good afternoon;"
  } else {
    whatTime = "Good evening;"
  }

  if (whatDay === 0) {
    whatDay = "Sunday";
  } else if (whatDay === 1) {
    whatDay = "Monday";
  } else if (whatDay === 2) {
    whatDay= "Tuesday"
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
  <h1 className="greeting">{whatTime} happy {whatDay}!</h1>
  <p className="greeting">I am Collin, a programmer</p>
  </>
)
};