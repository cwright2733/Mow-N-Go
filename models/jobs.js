const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const jobSchema = new Schema({
    firstName:  String,
    lastName: String,
    trimHedges: {
        selected: {type: Boolean, default: false},
        front: {type: Boolean, default: false},
        back: {type: Boolean, default: false}
      },
    edgeLawn:{
        selected: {type: Boolean, default: false},
        front: {type: Boolean, default: false},
        back: {type: Boolean, default: false}
      },
    mowGrass:{
        selected: {type: Boolean, default: false},
        front: {type: Boolean, default: false},
        back: {type: Boolean, default: false}
      },
    rakeLeaves:{
        selected: {type: Boolean, default: false},
        front: {type: Boolean, default: false},
        back: {type: Boolean, default: false}
      },
    accepted: {type: Boolean, default: false},
    date: { type: Date, default: Date.now },
});
const Jobs = mongoose.model('Job', jobSchema);
export default Jobs;