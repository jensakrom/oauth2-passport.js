const router = require('express').Router();


const authCheck = (req, res, next) => {

    if(!req.user){
        // user not lgin
        res.redirect('/auth/login');
    }else {
        // user loggin
        next();
    }
}

router.get('/', authCheck, (req, res) => {
        // res.redirect('/profile');
        res.send('you are login, this is your profile. ', + req.user.username)
});

module.exports = router;  