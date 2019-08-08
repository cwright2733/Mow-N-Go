const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let jobSchema = new Schema({
  
    todo_FormFirstName:{
      type: String,
      trim:true
      
    },
    todo_FormLastName: {
        type:String,
        trim:true
    },
    todo_description: {
        type: String,
        trim: true,
    },
    todo_responsible: {
        type: String
    },
});

const job = mongoose.model('job', jobSchema);

module.exports = job;