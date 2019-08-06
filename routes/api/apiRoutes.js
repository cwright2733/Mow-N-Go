const router = require('express').Router();
const Job = require('../../db/models/jobs');


// localhost:5000/api/jobs -- GET
// get all jobs for view jobs page
router.get('/jobs', (req, res) => {
    Job.find({})
    .then(jobs => {
        res.json({
            jobs: jobs
        });
    });
});


// localhost:5000/api/jobs -- POST
router.post('/job', (req, res) => {
    Job.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNum: req.body.phoneNum,
        email: req.body.email,
        address: req.body.address,
        trimHedges: req.body.trimHedges,
        edgeLawn: req.body.edgeLawn,
        mowGrass: req.body.mowGrass,
        rakeLeaves: req.body.rakeLeaves,
        instructions: req.body.instructions
    }).then(job => {
        res.json({
            message: 'Job posted successfully!',
            job: job
        });
    })
});

module.exports = router;

// import axios from "axios"; 

// const API = {
//   // pulls posted jobs from the mongo DB
//   getJobs = q => {
//     return axios.get("/api/jobs");
//   },
//   // Deletes the a posted Job with the given id
//   deleteJob = id => {
//     return axios.delete("/api/jobs/" + id);
//   },
//   // Saves job to the database
//   saveJob = jobData => {
//     return axios.post("/api/jobs", jobData);
//   }
// };
// module.exports = API;