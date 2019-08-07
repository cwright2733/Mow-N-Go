const router = require('express').Router();
const jobController = require("../../controllers/jobController");

// Matches with "/api/jobs"
router.route("/")
  .get(jobController.findAll)
  .post(jobController.create);

// Matches with "/api/jobs/:id"
router
  .route("/:id")
  .get(jobController.findById)
  .put(jobController.update)
  .delete(jobController.remove);

module.exports = router;

// // localhost:5000/api/jobs -- GET
// // get all jobs for view jobs page
// router.get('/jobs', (req, res) => {
//     Job.find({})
//     .then(jobs => {
//         res.json({
//             jobs: jobs
//         });
//     });
// });

// // localhost:5000/api/jobs -- POST
// // create new job
// router.post('/job', (req, res) => {
//     Job.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         phoneNum: req.body.phoneNum,
//         email: req.body.email,
//         address: req.body.address,
//         trimHedges: req.body.trimHedges,
//         edgeLawn: req.body.edgeLawn,
//         mowGrass: req.body.mowGrass,
//         rakeLeaves: req.body.rakeLeaves,
//         instructions: req.body.instructions
//     }).then(job => {
//         res.json({
//             message: 'Job posted successfully!',
//             job: job
//         });
//     })
// });

// module.exports = router;
