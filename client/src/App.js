import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './App.css';
import RequestJob from "./pages/RequestJob";
import SideNav from "./components/SideNav.";









function App() {
  return (
    <Router>
    <div className="App">
      <div>
      <SideNav/>
  
      <Switch>
        <Route path="/RequestJob" component={RequestJob} />
        <Route path="/AvailableJob" component={RequestJob} />
        <Route path="/Ratings" component={RequestJob} />
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
