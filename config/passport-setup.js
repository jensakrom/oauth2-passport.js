const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // option for the google starategy
        clientID: keys.google.clientId,
        clientSecret: keys.google.clientSecret,
        callbackURL:'/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('Passport Callback function fire');
    console.log(profile)
})
);