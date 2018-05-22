const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);
const app = express();
require('./routes/authRoutes')(app);

// whenever heroku runs the app, they create/inject the env variable
// if not run by heroku, just hardcode it
const PORT = process.env.PORT || 5000;
app.listen(PORT);
