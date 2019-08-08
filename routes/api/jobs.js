const router = require('express').Router();
const Job = require('/Users/camer/mow-n-go/models/jobs.model');






router.route('/').get((req,res) => {
    Job.find()
    .then(job => res.json(job))
    .catch(err => res.status(400).json('Error:' + err));   
});

// router.route('/add').post(function(req, res) {
//     let job = new job(req.body);
//     job.save()
//         .then(job => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });



router.route('/add').post((req,res) => {
    const FirstName = req.body.FormFirstName;
    const LastName = req.body.FormLastName;
    const description = req.body.todo_description;
    const responsible = req.body.todo_responsible;


    console.log(req.body);

const newJob = new Job({
todo_FormFirstName: FirstName,
todo_FormLastName:  LastName,
todo_description:   description,
todo_responsible:  responsible,
});

newJob.save()
.then(() => res.json('Exercise added!'))
.catch(err => res.status(400).json('Error: ' + err));   
});















module.exports = router;