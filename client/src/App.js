import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home.component";
import AvailableJobs from "./components/AvailableJobs.component";
import Form from "./components/Form.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

        
<div class="sidenav">
 <ul>
 <Link to="/" className="nav-link">Home</Link>
 <Link to="/form" className="nav-link">Form</Link>
 <Link to="/available" className="nav-link">Jobs</Link>>
 </ul>
</div>



          
      

          <Route path="/" exact component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/available" component={AvailableJobs} />
        </div>
      </Router>
    );
  }
}

export default App;
