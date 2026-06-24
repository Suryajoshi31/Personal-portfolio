import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen w-full overflow-hidden text-slate-900 dark:text-white selection:bg-indigo-200 dark:selection:bg-indigo-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main>
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
