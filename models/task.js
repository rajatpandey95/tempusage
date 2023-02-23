const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Must Provide Name"],
    // size, custom message
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TASK = mongoose.model("TASK", TaskSchema);

module.exports = TASK;
