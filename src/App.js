import './App.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import React from "react";
import Aboutme from './components/Aboutme/Aboutme';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Home />
      <Aboutme />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
