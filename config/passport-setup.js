const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // option for the google starategy
        clientID: keys.google.clientId,
        clientSecret: keys.google.clientSecret,
}, (accessToken, refreshToken, profile, done) => {
    // Check if id is exist
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
            console.log('Id its Exist')
            done(null, currentUser);
        }else{
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log('new User created ' + newUser )
                done(null, newUser)
            })
        }
    })
})
);