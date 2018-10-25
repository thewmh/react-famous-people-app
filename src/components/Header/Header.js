import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Famous People <span role="img" aria-label="smug person">&#x1F612;</span></h2>
        </header>
      </div>
    );
  }
}

export default Header;
