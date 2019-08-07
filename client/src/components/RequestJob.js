import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "../styles/RequestJob.css";
import axios from 'axios';
import API from "../utils/API";

class RequestJob extends Component {
  // Setting the component's initial state
  // the state keys match up with the db model attributes
  state = {
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    address: "",
    trimHedges: false,
    edgeLawn: false,
    mowGrass: false,
    rakeLeaves: false,
    instructions: ""
  };

  // this needs to be updated
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // this needs to be updated
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName || !this.state.phoneNum || !this.state.email || !this.state.address) {
      alert("Please complete the form, all fields are required except for 'Special Instructions'");
    } else {
      API.saveJob({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNum: this.state.phoneNum,
        email: this.state.email,
        address: this.state.address,
        trimHedges: this.state.trimHedges,
        edgeLawn: this.state.edgeLawn,
        mowGrass: this.state.mowGrass,
        rakeLeaves: this.state.rakeLeaves,
        instructions: this.state.instructions
      }).then(() => {
        console.log(`${this.state.firstName} ${this.state.lastName}, your Job has been posted!`);
        // clearing the state after job was saved to db
        this.setState({
          firstName: "",
          lastName: "",
          phoneNum: "",
          email: "",
          address: "",
          trimHedges: false,
          edgeLawn: false,
          mowGrass: false,
          rakeLeaves: false,
          instructions: ""
        });
      })
    }
  };

  render() {
    // Each input must have a `value`, `name`, and `onChange` prop
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <form onSubmit={this.handleFormSubmit} className="form">
            <h1 class="display-4">Job Request Form</h1>
            <p class="lead"> Please fill out the form!!</p>
            <div class="row">
              <div class="col">
                <input
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  id='firstName' />
              </div>
              <div class="col">
                <input
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  id='lastName' />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <hr />
                <input
                  value={this.state.phoneNum}
                  name="phoneNum"
                  onChange={this.handleInputChange}
                  type="text"
                  class="form-control"
                  placeholder="(123)456-7890"
                  id='phoneNum' />
              </div>
            </div>
            <div class="row">
              <label for="emailInput">Email address</label>
              <input
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="email"
                class="form-control"
                placeholder="name@example.com"
                id='emailInput' />
              <label for="addressInput">Jobsite address</label>
              <input
                value={this.state.address}
                name="address"
                onChange={this.handleInputChange}
                type="text"
                class="form-control"
                placeholder="123 Sample Rd. Atlanta, GA 30305"
                id='addressInput' />
              <label for="serviceSelect">Select what's to be done!</label>
              <select multiple class="form-control" id="serviceSelect">
                <option>Grass Cut</option>
                <option>Edge Trimmer</option>
                <option>Rake Leaves</option>
                <option>Plant Flowers</option>
              </select>
              <label for="specialInstructionText">Comments</label>
              <textarea class="form-control" id="specialInstructionText" rows="3"></textarea>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2" onClick={this.handleFormSubmit}>Post Job Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RequestJob);

  // const job = new Job({
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     phoneNum: this.state.phoneNum,
  //     email: this.state.email,
  //     address: this.state.address,
  //     trimHedges: this.state.trimHedges,
  //     edgeLawn: this.state.edgeLawn,
  //     mowGrass: this.state.mowGrass,
  //     rakeLeaves: this.state.rakeLeaves,
  //     instructions: this.state.instructions
  //   }).then(job.save(err => {
  //     if (err) return console.log(err);
  //   }));