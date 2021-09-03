if (process.env.NODE_ENV === ' production') {
    // we are in production - return prod set of keys
    module.exports = require('./prod');
} else {
    // we are in develpment - return dev keys
    module.exports = require('./dev');
}