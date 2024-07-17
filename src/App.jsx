import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import BackgroundAnimation from "./components/BackgroundAnimation";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="overflow-x-hidden antialiased text-cyan-300 selection:text-cyan-900 selection:bg-cyan-300">
          <BackgroundAnimation />
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
      )}
    </>
  );
};

export default App;
