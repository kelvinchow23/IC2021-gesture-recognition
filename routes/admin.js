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

router.get('/getUserData/:username', async (req, res) => {
    try {
        const trainings = await Training.find({username: req.params.username});
        res.json(trainings);
    } catch (err) {
        res.json({message:err});
    }
});


module.exports = router;
