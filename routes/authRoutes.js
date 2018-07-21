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

    app.get(
        "/api/logout", (req, res) => {
            // logout is a function added by passport. It kills the cookie.
			req.logout();

            // req.user no longer exists -- this is an "empty" response
            res.send(req.user);
    });

    /* if everything is setup correctly (cookies/session, passport de/serialization) then mongoose user instance
    is magically attached to the request
    */
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}
