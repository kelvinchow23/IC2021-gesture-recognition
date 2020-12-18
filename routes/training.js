const express = require('express');
const router = express.Router();
const Training = require('../models/Training');

//ROUTES
router.get('/', (req, res) => {
    res.send("on training page");
});

router.get('/getall', async (req, res) => {
    try {
        const trainings = await Training.find();
        res.json(trainings);
    } catch (err) {
        res.json({message:err});
    }
});

router.post("/", async (req, res) => {
    const training = new Training({
        name: req.body.name,
        letter: req.body.letter,
        datetime: req.body.datetime,
        data: req.body.data
    });
    try {
        const savedTraining = await training.save();
        res.json(savedTraining);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
