const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup')


// Setup up view engine
app.set('view engine', 'ejs');

// Setup Routes
app.use('/auth',authRoutes);

// create home route
app.get('/', (req,res) => {
    res.render('home');
});

app.listen (3001, ()=>{
    console.log('App now listening for request on port 3001');
});