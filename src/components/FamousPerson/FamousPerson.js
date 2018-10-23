import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPerson extends Component {

    state = {
        name: '',
        role: ''
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState( {
                ...this.state,
                [propertyName]: event.target.value,
            
            })
        }
    }

    logNameAndRole = (e) => {
        e.preventDefault();
        console.log(this.state)
    }


  render() {
    return (
      <div>
        <p>you are not famous</p>
        <div><input onChange={ this.handleChangeFor('name') } placeholder="'Famous Person's' Name"/></div>
        <div><input onChange={ this.handleChangeFor('role') } placeholder="What role are they 'famous' for?"/></div>
        <h2 className="awful-text">{this.state.name} is famous for {this.state.role}</h2>
        <button onClick={this.logNameAndRole}>Submit</button>
        <p onClick={this.logNameAndRole}>you are not famous</p>
      </div>
    );
  }
}

export default FamousPerson;
