const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// add unique id to the user Cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// tacke the id from the cookie to see whoe is this persone
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        if (user) {
            console.log('USER COOKIE EXISTS!! ');
        } else {
            console.log('USER COOKIE DOSE NOT EXISTS!! ');
        }
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) {
                    console.log('User exists');
                    done(null, existingUser);
                } else {
                    new User({ googleId: profile.id }).save().then(user => {
                        console.log('New User added');
                        done(null, user);
                    });
                }
            });
        },
    ),
);
