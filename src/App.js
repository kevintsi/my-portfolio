import './App.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import React, { createContext, useState } from "react";
import Aboutme from './components/Aboutme/Aboutme';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

export const Context = createContext();

const App = () => {

  const [language, setLanguage] = useState("FR")


  const onLanguageChange = (e) => {
    setLanguage(e.target.value);
  }

  return (
    <Context.Provider value={{ language, onLanguageChange }}>
      <Router>
        <NavBar />
        <Home />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
      </Router>
    </Context.Provider>
  );
}

export default App;
