// importing the stuffs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RequestJob from "./components/RequestJob";
import SideNav from "./components/SideNav";
import ViewJobs from '../src/pages/ViewJobs';
import Home from '../src/pages/Home';
import './App.css';

// my custom stuffs
// import JobDetail from './components/JobDetail';



function App() {
  return (
    <Router>
      <div>
        <SideNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/RequestJob" component={RequestJob} />
          <Route path="/AvailableJobs" component={ViewJobs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
