import './App.css';
import Login from './components/login.js'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import axios from 'axios'
import React from 'react';

// woo! 
let variableToShow = 'Not okay';

// https://stackoverflow.com/questions/43493373/react-component-not-updating-after-changing-a-value
// to fix the variableToShow

async function getExample() {
  try {
    const response = await axios(
      {
        url: 'http://localhost:5012/info',
        method: 'get',
        headers: { 'Content-Type': 'application-json' },
      }
    );
    variableToShow = 'Okay!';
    return response;
  } catch {
    console.log('Something went wrong')
  }
}

function App() {
  getExample().then(() => {
    console.log('getExample ran!')
  });
  return (
    <div className="App">
      Happy happy happy
      {variableToShow}
      <Login/>
    </div>
  );
}

export default App