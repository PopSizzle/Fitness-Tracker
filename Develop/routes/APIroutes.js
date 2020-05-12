const db = require("../models");

module.exports=function(app){
// get workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// get workouts
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// create new workout
app.post("/api/workouts", (req, res) => {
    console.log("creating new workout");
    db.Workout.create(req.body)
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// update a workout
app.put("/api/workouts/:id", (req, res) => {
    console.log("adding exercise");
    db.Workout.findOneAndUpdate({
        _id: req.params.id
    },
    {
        $push: { exercises: req.body }
    },
    {
        new: true 
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.statusMessage(400).json(err);
    });
});
}