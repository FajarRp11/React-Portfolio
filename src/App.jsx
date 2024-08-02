import React from "react";
import Navbar from "./components/Elements/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default App;
