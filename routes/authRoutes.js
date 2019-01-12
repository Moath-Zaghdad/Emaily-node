const passport = require('passport');

// create an arrow function that requires (app)
module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }),
    );

    app.get('/auth/google/callback', passport.authenticate('google'));
};
