import React from "react";


let day = new Date();
let year = day.getYear();

export default function Footer() {
  return (
    <>
    <div id="footer">
    <h5>Created by Collin Hooper</h5>
    <h5>Copyright {year + 1900}</h5>
    </div>
    </>
  )
}
