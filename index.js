const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

// whenever heroku runs the app, they create/inject the env variable
// if not run by heroku, just hardcode it
const PORT = process.env.PORT || 5000;
app.listen(PORT);
