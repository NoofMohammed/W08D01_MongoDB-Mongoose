const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    task: { type: String,  unique: true },
          description:{ type: String,  unique: true },
       deadline:{ type: String,  unique: true },
       isCompleted:{ type: String,  unique: true }, 
        priority:{ type: String,  unique: true }
    });

    module.exports = mongoose.model("todo", todoSchema);

    