import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPerson extends Component {

    state = {
        famousPerson: {
        name: '',
        role: ''
        },
        people: []
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState( {
                famousPerson: {
                ...this.state.famousPerson,
                [propertyName]: event.target.value,
                }
            })
        }
    }

    logNameAndRole = (e) => {
        e.preventDefault();
        let newFamousPerson = this.state.famousPerson;
        console.log(`The famous person is:`, newFamousPerson);
        this.setState({
            people: [...this.state.people, this.state.famousPerson],
            famousPerson: {
            name: '',
            role: ''
            }
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
          <section>
            <p className="blackout">you are !famous you are !famous you are !famous you are !famous you are !famous you are !famous </p>
        <form onSubmit={ this.logNameAndRole }>
            <input onChange={ this.handleChangeFor('name') } placeholder="'Famous Person's' Name" value={this.state.famousPerson.name}/>
            <input onChange={ this.handleChangeFor('role') } placeholder="What role are they 'famous' for?" value={this.state.famousPerson.role}/>
            <h2 className="awful-text">{this.state.famousPerson.name} is famous for {this.state.famousPerson.role}</h2>
            <input type="submit" value="Add Famous Person" />
            {/* <p onClick={this.logNameAndRole}>you are not famous</p> */}
        </form>
        </section>
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
