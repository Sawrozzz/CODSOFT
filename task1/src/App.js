import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
  );
};

export default App;
