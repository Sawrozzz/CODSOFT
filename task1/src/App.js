import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div id="home">
        {" "}
        <Home />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default App;
