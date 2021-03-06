import React, { Component } from 'react';
import './FamousPerson.css';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';

class FamousPerson extends Component {

    state = {
        famousPerson: {
        name: '',
        role: ''
        },
        people: [],
    }

    handleChangeFor = (propertyName) => (event) => {
            this.setState( {
                famousPerson: {
                ...this.state.famousPerson,
                [propertyName]: event.target.value,
                }
            })
        }

    logNameAndRole = (e) => {
        e.preventDefault();
        // let newFamousPerson = this.state.famousPerson;
        // console.log(`The famous person is:`, newFamousPerson);
        this.setState({
            famousPerson: {
            name: '',
            role: '',
            },
            people: [...this.state.people, this.state.famousPerson],
        })
    }

  render() {
    // console.log(`The famous people are:`, this.state.people);
    let listItemHtml = [];
    // for(let i=0; i<this.state.people.length; i++) {
    //     let person = this.state.people[i];
    //     listItemHtml.push(<li key={person.name}>{person.name} is known for their role as {person.role}</li>)
    // }

    this.state.people.forEach( (person) => {
        listItemHtml.push(<li key={person.name}>{person.name} is known for their role as {person.role}</li>)
    })
    return (
      <div>
          <FamousPersonForm logNameAndRole={this.logNameAndRole}
                            handleChangeFor={this.handleChangeFor}
                            famousPerson={this.state.famousPerson}/>
      <section>
          <h2 className="awful-text">All of the Famous People</h2>
          <pre>
              {JSON.stringify(this.state.people)}
          </pre>
          <ul>
              {listItemHtml}
          </ul>
      </section>
      </div>
    );
  }
}

export default FamousPerson;
