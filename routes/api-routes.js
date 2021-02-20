const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  //Do work to return most recent workout
  console.log("Made it to this place");
  db.Workout.find({})
    .sort({ day: 1 })
    .then(data => {
      console.log(data);
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

