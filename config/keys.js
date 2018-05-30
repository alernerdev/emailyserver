// determine if we are using prod or dev credentials
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dev');   
} else {
    module.exports = require('./dev');
}