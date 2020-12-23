const express = require('express');
const router = express.Router();
const Stats = require('../models/Stats');


//ROUTES
router.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/client/build/'})});

router.post("/", async (req, res) => {
    const stats = new Stats({
        user: req.body.user,
        score: req.body.score,
        description: req.body.description
    });
    try {
        const savedStats = await stats.save();
        res.json(savedStats);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
