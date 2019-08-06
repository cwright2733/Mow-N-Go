const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phoneNum: {type: String, required: true},
  email: String,
  address: {type: String, required: true},
  trimHedges: {type: Boolean, default: false},
  edgeLawn: {type: Boolean, default: false},
  mowGrass: {type: Boolean, default: false},
  rakeLeaves: {type: Boolean, default: false},
  instructions: String,
  accepted: {type: Boolean, default: false},
  date: { type: Date, default: Date.now },
});

jobSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

jobSchema.pre('update', function () {
  this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

jobSchema.pre('findOneAndUpdate', function () {
  this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});


// @name db.Jobs
// exporting the schema
module.exports = mongoose.model('Job', jobSchema);
