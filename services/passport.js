const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/key');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // console.log('accessToken- ', accessToken);
    // console.log('refreshToken- ', refreshToken);
    // console.log('profile- ', profile);
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if(existingUser) {
                console.log('not creating new user', existingUser);
                done(null, existingUser);
            } else {
                new User({ googleId: profile.id }).save()
                .then((res) => {
                    done(null, res);
                    console.log('res------------', res);
                });

            }
            
        })
}));