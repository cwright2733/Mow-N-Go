import axios from "axios"; 

const API = {
  // pulls posted jobs from the mongo DB
  getJobs: function() {
    return axios.get("/api/jobs");
  },
  // Deletes the a posted Job with the given id
  deleteJob: function(id) {
    return axios.delete("/api/jobs/" + id);
  },
  // Saves job to the database
  saveJob: function(jobData) {
    return axios.post("/api/jobs", jobData);
  }
};
export default API;
