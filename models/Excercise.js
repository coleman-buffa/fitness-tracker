const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
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

const Excercise = mongoose.model("Exercise", ExcerciseSchema);

module.exports = Excercise;