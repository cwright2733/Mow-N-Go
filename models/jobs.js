const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  firstName:  String,
  lastName: String,
  phoneNum: String,
  email: String,
  address: String,
  trimHedges: {type: Boolean, default: false},
  edgeLawn: {type: Boolean, default: false},
  mowGrass: {type: Boolean, default: false},
  rakeLeaves: {type: Boolean, default: false},
  instructions: String,
  accepted: {type: Boolean, default: false},
  date: { type: Date, default: Date.now },
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
