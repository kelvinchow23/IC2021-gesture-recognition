const express = require('express');
const router = express.Router();
const Training = require('../models/Training');
const Profile = require('../models/Profile');

//ROUTES

router.get('/getAllUsers', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (err) {
        res.json({message:err});
    }
});


router.get('/getTrainingData/:username', async (req, res) => {
    try {
        const trainings = await Training.find({name: req.params.username});
        res.json(trainings);
    } catch (err) {
        res.json({message:err});
    }
});

router.get('/getRequestList', async (req, res) => {
    try {
        const profiles = await Profile.find({status: 'Model Training Requested'});
        res.json(profiles);
    } catch (err) {
        res.json({message:err});
    }
});


module.exports = router;
