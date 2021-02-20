const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
  //Do work to return most recent workout
  Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});

router.put("/api/workouts/:id", (req, res) => {
  //Do work to add exercise data
});

router.post("/api/workouts", (req, res) => {
  //Do work to create a workout
});

router.get("/api/workouts/range", (req, res) => {
  //Do work to get workout in a range
});

module.exports = router;

