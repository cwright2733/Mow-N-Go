const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/api/jobRoutes.js');
const PORT = process.env.PORT || 3000;

const app = express ();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Loading API routes
app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
  // Connect to the Mongo DB
  mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/jobs", { useNewUrlParser: true });
  
  // Start the API server
  app.listen(PORT, function() {
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
  });
  
module.exports = app;
