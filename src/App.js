import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestBot from "./bot";

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <TestBot/>
    </div>
  );
}

export default App;
