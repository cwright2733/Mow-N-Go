const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobSchema = new Schema({
  firstName:  String,
  lastName: String,
  trimHedges: {
      selected: Boolean,
      front: Boolean,
      back: Boolean
    },
  edgeLawn:{
    selected: Boolean,
    front: Boolean,
    back: Boolean
  },
  mowGrass:{
    selected: Boolean,
    front: Boolean,
    back: Boolean
  },
  rakeLeaves:{
    selected: Boolean,
    front: Boolean,
    back: Boolean
  },
  accepted: Boolean,
  date: { type: Date, default: Date.now },
});
const Jobs = mongoose.model('Jobs', jobSchema);
export default Jobs;