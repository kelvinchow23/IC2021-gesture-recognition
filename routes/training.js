const express = require('express');
const router = express.Router();
const Training = require('../models/Training');

//ROUTES
router.get('/getall', async (req, res) => {
    try {
        const trainings = await Training.find();
        res.json(trainings);
    } catch (err) {
        res.json({message:err});
    }
});

router.delete('/:trainingId', async (req, res) => {
    try {
        const removedTraining = await Training.remove({ _id: req.params.trainingId});
        res.json(removedTraining);
    } catch (err) {
        res.json({message: err});
    }
});

router.delete('/delAllbyUser/:userId', async (req, res) => {
    try {
        const removedTraining = await Training.remove({ name: req.params.userId});
        res.json(removedTraining);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:username', async (req, res) => {
    try {
        const trainingCount = await Training.count({name: req.params.username});
        res.json(trainingCount);
    } catch (err) {
        res.json({message:err});
    }
});

router.post("/", async (req, res) => {
    const training = new Training({
        name: req.body.name,
        gesture: req.body.gesture,
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
