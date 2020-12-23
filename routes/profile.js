const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Profile = require('../models/Profile');
const passport = require('passport');

//ROUTES
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (err) {
        res.json({message:err});
    }
});

router.get('/checkuser/:profileId', async (req, res) => {
    try {
        const profiles = await Profile.find({username: req.params.profileId});
        res.json(profiles.length !== 0);  // user exists?
    } catch (err) {
        res.json({message:err});
    }
});

router.get('/checkemail/:emailId', async (req, res) => {
    try {
        const profiles = await Profile.find({email: req.params.emailId});
        res.json(profiles.length !== 0);  // email exists in database?
    } catch (err) {
        res.json({message:err});
    }
});

router.post('/validatelogin', (req, res, next) => {
        passport.authenticate('local', (err, user) => {
            if (err) throw err;
            if (!user) res.send('No user exists');
            else {
                req.logIn(user, err => {
                    if (err) throw err;
                    res.send(req.user);
                })
            }
        }) (req, res, next);
});


router.post("/", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const profile = new Profile({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedProfile = await profile.save();
        res.json(savedProfile);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;
