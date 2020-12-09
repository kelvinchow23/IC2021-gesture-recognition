const express = require('express');
const router = express.Router();
const Stats = require('../models/Stats');


//ROUTES
router.get('/', (req, res) => {
    res.send("on stats page");
});

router.get('/other', (req, res) => {
    res.send("other stats stuff");
});

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
