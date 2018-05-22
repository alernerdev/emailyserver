const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(
    cookieSesion({
        maxAge: 30 * 24 * 60 * 60 * 1000,    // cookie lasts 30 days
        keys: [keys.cookieKey]  // for encryption
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// whenever heroku runs the app, they create/inject the env variable
// if not run by heroku, just hardcode it
const PORT = process.env.PORT || 5000;
app.listen(PORT);
