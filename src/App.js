import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {HashRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className={classes.header}>
        <div className={classes.name}>
        
        </div>
      </header>      */}
    <Router>
      <div className="navbar">
        <Navbar/>
      </div>
    </Router>
    </div>
  );
}

export default App;
