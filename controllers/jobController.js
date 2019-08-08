const db = require('../db/models/jobs');

// Defining methods for the jobController
module.exports = {
  // findAll(req, res) {
  //   db.jobs.find(req.query)
  //     .then(dbJob => res.json(dbJob))
  //     .catch(err => res.status(422).json(err));
  // },
  findById(req, res) {
    db.jobs.findById(req.params.id)
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.jobs.create(req.body)
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.jobs.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.jobs.findById(req.params.id)
      .then(dbJob => dbJob.remove())
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  }
};
