import React, { Component } from 'react';
import './FamousPersonForm.css';

class FamousPersonForm extends Component {

  render() {
    return (
          <section>
            <p className="blackout">you are !famous you are !famous you are !famous you are !famous you are !famous you are !famous </p>
                <form onSubmit={ this.props.logNameAndRole }>
                    <input onChange={ this.props.handleChangeFor('name') } placeholder="'Famous Person's' Name" value={this.props.famousPerson.name}/>
                    <input onChange={ this.props.handleChangeFor('role') } placeholder="What role are they 'famous' for?" value={this.props.famousPerson.role}/>
                    <h2 className="awful-text">{this.props.famousPerson.name} is famous for {this.props.famousPerson.role}</h2>
                    <input type="submit" value="Add Famous Person" />
                    {/* <p onClick={this.logNameAndRole}>you are not famous</p> */}
                </form>
        </section>
    );
  }
}

export default FamousPersonForm;
