// reference to passportJS
const passport = require('passport');

module.exports = (app) => {

    // internally, the google strategy has an identifier that is called 'google'
    // auth step 1
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"] // what is the stuff we are asking for from google
        })
    );

    // this is coming back from google. And there is going to be a code after the callback in the URL
    // auth step 2
    app.get(
        "/auth/google/callback", passport.authenticate('google')
    );
}