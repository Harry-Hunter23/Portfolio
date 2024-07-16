import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

import InterstellarConstellationAnimation from "./components/BackgroundAnimation";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden antialiased text-cyan-300 selection:text-cyan-900 selection:bg-cyan-300">
        <InterstellarConstellationAnimation />
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Tools />
          <Projects />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default App;
