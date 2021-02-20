const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  Workout.findOneAndUpdate({
    _id: req.params.id},
    {$push: { exercises: req.body}},
    {new: true,
    upsert: true})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });

router.post("/api/workouts", ({body}, res) => {
  console.log(body);
  Workout.create(body)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  //Do work to get workout in a range
});

module.exports = router;

