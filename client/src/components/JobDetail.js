import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import "../styles/JobDetail.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function JobDetail({ firstName, lastName, phoneNum, email, address, trimHedges, edgeLawn, mowGrass, rakeLeaves, instructions }) {
  return (
    <ListItem>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <h3 className="font-italic"> Posted by: {firstName} {lastName} </h3>
        </Grid>
        <Grid item xs={6}>
          <h4 className="font-italic">Contact details</h4>
          <br></br>
          <ul>
            <li>Phone:{phoneNum}</li>
            <li>Email:{email}</li>
            <li>Address:{address}</li>
          </ul>
        </Grid>
        <hr></hr><Grid item xs={6}>
          <h5 className="font-italic small">Requested services:</h5>
          <ul>
            {trimHedges ? <li>Trim Hedges</li> : ''}
            {edgeLawn ? <li>Edge Lawn</li> : ''}
            {mowGrass ? <li>Mow Grass</li> : ''}
            {rakeLeaves ? <li>Rake Leaves</li> : ''}
          </ul>
        </Grid>
        <Grid item xs={8}>
          <h5 className="font-italic small">Additional instructions:</h5>
          <p>{instructions}</p>
        </Grid>
        <Button variant="contained" color="primary">
          Accept this Job!
    </Button>
      </Grid>
    </ListItem>
  );
}

export default JobDetail;
