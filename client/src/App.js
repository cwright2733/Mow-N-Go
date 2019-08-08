// importing the stuffs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RequestJob from "./components/RequestJob";
import SideNav from "./components/SideNav";
import ViewJobs from '../src/pages/ViewJobs';
import Home from '../src/pages/Home';
import './App.css';


function App() {
  return (
    <Router>
        <SideNav />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/RequestJob" component={RequestJob} />
          <Route path="/AvailableJobs" component={ViewJobs} />
        </Switch>
    </Router>
  );
}

export default App;
