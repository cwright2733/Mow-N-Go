import React, { Component } from 'react';
import API from '../util/API';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import JobDetail from '../components/JobDetail';
import Container from '@material-ui/core/Container';


class ViewJobs extends Component {
  
  state = {
    jobs: [],
    selectedJob: {}
  }

  // function to get jobs
  getJobs = () => {
    API.getJobs()
      .then(res => {
        // all the data on res.data
        this.setState({
          jobs: res.data
        })
      }).catch(err => console.log(err));

  }

  handleJobAccept = id => {
    API.deleteJob(id).then(res => this.getJobs());
  };

  // showJobDetail = () => {
  //   this.setState({
  //     selectedJob: this
  //   });
  // };

  // Get all jobs to be shown on the list when component initially loads
  componentDidMount = () => {
    this.getJobs();
    console.log(this.state.jobs);
  };

  render(){
    return (
      <Container maxWidth="sm">

      </Container>
    )
  }

};

export default ViewJobs;


// {props.jobs.length > 0 ? props.jobs.map((job, job_index) => (
//   <ListItem button key={job_index}>
//     <ListItemText primary={job.firstName} />
//   </ListItem>
// )) : 'No Jobs posted yet'}