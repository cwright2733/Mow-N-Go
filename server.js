    
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;




app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




  // Add routes, both API and view

  
  // Connect to the Mongo DB
  mongoose.connect('mongodb://127.0.0.1:27017/jobs', {  useCreateIndex: true, useNewUrlParser: true });
  const connection = mongoose.connection;

  connection.once('open', function() {
    console.log("MongoDB database connection established succesfully");
  })


  const jobRouter = require('./routes/api/jobs');

  app.use('/jobs', jobRouter);
 



  // Start the API server
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  