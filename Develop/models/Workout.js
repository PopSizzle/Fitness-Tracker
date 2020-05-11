const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            required: "Required"
        },
        name: {
            type: String,
            required: "Required"
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }


    }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;