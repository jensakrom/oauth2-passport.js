const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const logger = require('morgan');

const app = express();

// set view engine
app.set('view engine', 'ejs');

app.use(logger('dev'));

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect mongodb
mongoose.connect(keys.mongodb.DbURI, {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Mongodb connection succed');
    }else {
        console.log('Error in Mongodb Connection.')
    }
})

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

app.listen(3001, () => {
    console.log('app now listening for requests on port 3000');
});
