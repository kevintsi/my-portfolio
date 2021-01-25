import './App.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <div className="main-container">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
