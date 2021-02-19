import './App.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './components/Routes/Routes';
import React, { createContext, useState } from "react";
import Footer from './components/Footer/Footer';

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
        <Routes />
        {/* <Footer /> */}
      </Router>
    </Context.Provider>
  );
}

export default App;
