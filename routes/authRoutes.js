const passport = require('passport');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        console.log('logout----');
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', auth.isLoggedin, (req, res) => {
        // if( req.isAuthenticated()) {
            console.log('user is authorized----', req.user);
        // } else {
            // console.log('user not authorized--', req.user);
        // }

        res.send(req.user);
    });
};