const Profile = require('./models/Profile');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            Profile.findOne({username: username}, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.username)
    })
    passport.deserializeUser((username, cb) => {
        Profile.findOne({_username: username}, (err, user) => {
            cb(err, user);
        });
    });
};