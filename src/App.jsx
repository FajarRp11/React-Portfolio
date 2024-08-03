import React from "react";
import Navbar from "./components/Elements/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skill";
import Project from "./pages/project";
import Contact from "./pages/contact";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
