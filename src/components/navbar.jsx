//jshint esversion:6

import React from "react";
import { Link } from "react-router-dom";

import skull from "../../src/images/Skull1.png";
import sill from "../../src/images/me-icon.png";

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-#062743" style={{backgroundColor: "#B91646", fontFamily: "Enigmatic, sans serif"}}>
      <Link className="navbar-brand" to="/">
      <img src={skull} className="img-fluid" style={{height: "50px"}} alt="mnm" />
          CDH Create
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <Link to="/">
                <button type="button" className="btn btn-outline-light btn-sm" name="button">
                  <div className="nav-link">
                  Home
                  </div>
                </button>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/projects">
            <button type="button" className="btn btn-outline-light btn-sm" name="button">
              <div className="nav-link">
              Projects
              </div>
            </button>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/goodies">
          <button type="button" className="btn btn-outline-light btn-sm" name="button">
            <div className="nav-link">
            Goodies
            </div>
          </button>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/contact">
              <button type="button" className="btn btn-outline-light btn-sm" name="button">
              <div className="nav-link">
              Contact
              </div>
            </button>
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}
