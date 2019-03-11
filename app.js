const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const SESSION_TIME = 24 * 60 * 60 * 1000;


// Setup up view engine
app.set('view engine', 'ejs');

// set cookies
app.set(cookieSession({
    maxAge: SESSION_TIME,
    keys: [keys.session.cookieKey]
}))

// Initialize passport
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

// Setup Routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

// create home route
app.get('/', (req,res) => {
    res.render('home');
});

app.listen (3001, ()=>{
    console.log('App now listening for request on port 3001');
});