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
        min: 1
      }
    }
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
