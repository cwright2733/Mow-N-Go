import React from 'react';
import { Route, Switch } from "react-router-dom";
import RequestJob from "./components/RequestJob";
import SideNav from "./components/SideNav";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewJobs from './components/pages/ViewJobs';
import './App.css';

// import JobDetail from './components/JobDetail';
// import JobListElement from './components/JobListElement';
// import Container from "./components/Container";
// import Footer from './components/Footer';

const mongoose = require('mongoose');

function App() {
  return (
    <div className="App">
      <SideNav />
      <Switch>
        <Route path="/RequestJob" component={RequestJob} />
        <Route path="/AvailableJobs" component={ViewJobs}/>
      </Switch>
      </div>
  );
}

export default App;
