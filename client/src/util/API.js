import axios from "axios"; 

const API = {
  // pulls posted jobs from the mongo DB
  getJobs = q => {
    return axios.get("/api/jobs");
  },
  // Deletes the a posted Job with the given id
  deleteJob = id => {
    return axios.delete("/api/jobs/" + id);
  },
  // Saves job to the database
  saveJob = jobData => {
    return axios.post("/api/jobs", jobData);
  }
};
module.exports = API;
