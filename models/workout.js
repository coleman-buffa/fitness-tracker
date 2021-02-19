const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    // unique: true,
    required: "Enter a date for workout"
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]      
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;