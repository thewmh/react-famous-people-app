import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FamousPerson from './components/FamousPerson/FamousPerson';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson />
      </div>
    );
  }
}

export default App;
