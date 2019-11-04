import React from 'react';
import logo from './logo.svg';
import './App.css'
import {sayHello, ackHello, converse, changeColor} from "./bot";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {
        conversation()
      }
    </div>
  );
}

function conversation() {
  sayHello().then(() =>
      ackHello().then(() =>
          converse()
      ).then(() =>
          changeColor()
      )
  )
}

export default App;
