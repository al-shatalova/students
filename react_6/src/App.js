import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import ClickButton from './components/ClickButton';
import React, {Component} from 'react';

function App() {
  return (
    <div className="App">
      <Hello name='Александр' surname='Тюрин' age={21}/>
      <ClickButton/>
    </div>
  );
}

export default App;
