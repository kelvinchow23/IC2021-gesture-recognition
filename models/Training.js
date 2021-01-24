const mongoose = require('mongoose');

const TrainingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gesture: {
        type: String,
        required: true
    },
    
    datetime: {
        type: String,
        required: true
    },
    
    data: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("Training", TrainingSchema);