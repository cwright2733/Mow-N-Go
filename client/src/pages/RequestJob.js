import React, { Component } from "react";
import "../styles/RequestJob.css";


class RequestJob extends Component {

  render() {
    return (
      <div>


<div class="jumbotron jumbotron-fluid">
<div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>

  <div class="row">
  <div class="col">
  <input type="text" class="form-control" placeholder="First name" />
  </div>
  <div class="col">
  <input type="text" class="form-control" placeholder="Last name" />
  </div>
  
  
    </div>

    <div class="row">
    <div class="col"> 
    <hr />
      
    <input type="text" class="form-control" placeholder="Phone Numer" />
    </div>
    </div>

      


  
<div class="form-group" />
  <label for="exampleFormControlInput1">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
<div  />

<div class="form-group">
  <label for="exampleFormControlSelect2">Select what to be done!</label>
  <select multiple class="form-control" id="exampleFormControlSelect2">
    <option>Grass Cut</option>
    <option>Edge Trimmer</option>
    <option>Rake Leaves</option>
    <option>Plant Flowers</option>
  </select>
</div>
<div class="form-group" />
  <label for="exampleFormControlTextarea1">Comments</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<div />

<div class="col-auto">
<button type="submit" class="btn btn-primary mb-2">Submit</button>
  </div>


</div>
 
    
      </div>
      
    );

  }
}













export default RequestJob;