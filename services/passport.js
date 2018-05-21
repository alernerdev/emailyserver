const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback" // where to redirect after user grants premission
            // the callback needs to match console.developers.google.com entry
        },
        (accessToken, refreshToekn, profile, done) => {
            // auth step 3.  Google calling us back again
            // access token expires after a whie and refresh token can be used to renew the access token
            console.log(`AccessToken ${accessToken}`);
            console.log(`RefreshToken ${refreshToken}`);
            console.log(`Profile ${profile}`);
        }
    )
);
