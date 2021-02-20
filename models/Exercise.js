const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    enum: ["resistance", "cardio"],
    required: "Enter a workout type"
  },
  name: {
    type: String,
    required: "Enter an excercise name"
  },
  duration: {
    type: Number,
    min: 1,
    required: "Enter a workout duration"
  },
  weight: {
    type: Number,
    min: 1
  },  
  reps: {
    type: Number,
    min: 1
  },  
  sets: {
    type: Number,
    min: 1
  },
  distance: {
    type: Number,
    min:1
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;