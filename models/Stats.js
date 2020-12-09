const mongoose = require('mongoose');

const StatsSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    description: String
});

module.exports = mongoose.model("Stats", StatsSchema);