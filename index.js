const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oath20').Strategy;

const app = express();

passport.use(new GoogleStrategy());


// whenever heroku runs the app, they create/inject the env variable
// if not run by heroku, just hardcode it
const PORT = process.env.PORT || 5000;
app.listen(PORT);