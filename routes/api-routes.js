const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }
  ])
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate({
    _id: req.params.id
  },
    { $push: { exercises: req.body } },
    {
      new: true,
      upsert: true
    })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {  
  Workout.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;

