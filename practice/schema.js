const mongoose = require("mongoose");



const todoSchema = new mongoose.Schema({
  task: { type: String , require:true},
  description: { type: String },
  deadline: { type: String },
  isCompleted: { type: String},
  priority: { type: String },
});



module.exports = mongoose.model("todo", todoSchema);
