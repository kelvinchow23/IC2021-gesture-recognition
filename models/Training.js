const mongoose = require('mongoose');

const TrainingSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    userID: {
        type: Number,
        required: true
    },
    description: String
});

module.exports = mongoose.model("Training", TrainingSchema);