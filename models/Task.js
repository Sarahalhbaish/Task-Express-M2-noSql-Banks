const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"], 
    default: null, 
  },
  funds: {
    type: Number, 
    default: 0,
  },
});

module.exports = model("Task", TaskSchema);
