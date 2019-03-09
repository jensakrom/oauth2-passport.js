const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const mongoose = require('mongoose');


// Setup up view engine
app.set('view engine', 'ejs');

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

// create home route
app.get('/', (req,res) => {
    res.render('home');
});

app.listen (3001, ()=>{
    console.log('App now listening for request on port 3001');
});