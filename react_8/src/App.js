import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import React, {Component} from 'react';

function App() {
  return (
    <div className="App">
      <UserForm name="" age={0}/>
    </div>
  );
}

export default App;
