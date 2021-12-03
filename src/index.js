//jshint esversion:6

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./app.jsx";
import Projects from "./routes/projects";
import Goodies from "./routes/goodies";
import Contact from "./routes/contact";


const rootElement = document.getElementById("root");
render(
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<App />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="./routes/goodies" element={<Goodies />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
