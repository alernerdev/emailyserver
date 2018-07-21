// determine if we are using prod or dev credentials

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dev');
    // module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
