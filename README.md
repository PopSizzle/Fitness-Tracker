# Fitness Tracker

The Fitness Tracker allows users to record their workouts so that they can see trends in their exercise history. They can access past workouts and join different types of exercise together in each workout.

## Dependencies and Technologies Used

The following depencies must be installed for the Fitness Tracker to work properly:

* Mongoose
* Express
* Path

The app is then run by typing "node server.js" into the command line from the root directory.

### Code Highlights

Here are two of the API routes used to create a new workout and update a workout in the database:

```
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
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [See Live Site](https://calm-badlands-57566.herokuapp.com/?id=5eba3c334ad7e2001779ae5f)


## Authors

* **Sam Poppe** 

- [Link to Github](https://github.com/PopSizzle)
- [Link to LinkedIn](https://www.linkedin.com/in/sam-poppe-623281193/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License 

## Acknowledgments

* Credit to Trilogy Education Services for providing much of the front end code, my teacher Jerome Chenette and teaching assistants Kerwin Hy and Mahisha Gunasekaran for their guidance and patience, and Ana Medrano for help troubleshooting the app.