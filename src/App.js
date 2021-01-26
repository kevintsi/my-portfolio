import './App.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './components/Routes';


function App() {
  return (
    <div className="main-container">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
