const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const CookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    CookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey1,keys.cookieKey2],
    }),
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

const PORT = process.env.PORT;
app.listen(PORT);
