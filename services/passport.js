const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

// pull the model out
const User = mongoose.model.apply('users');

/* step 5 */
/* the user here is the one that was 'done' in the GoogleStrategy code below */
/* from id, make a cookie */
passport.serializeUser((user, done) => {
    // user.id here is the mongodb id, not googleid.  user is the mongoose model
    // this makes sure that ids are unique between different auth mechanisms.
    let err = null;
    done(err, user.id);
});

/* from cookie, make a user */
passport.deserializeUser((id, done)=>{
    User.findById({id})
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback" // where to redirect after user grants premission
            // the callback needs to match console.developers.google.com entry
        },
        (accessToken, refreshToken, profile, done) => {
            // auth step 3.  Google calling us back again
            // access token expires after a whie and refresh token can be used to renew the access token

            // did I already record this user?
            User.findOne({googleId: profile.id}) // returns a promise
                .then( (existingUser) => {

                    // step 4

                    let err = null;

                    if (existingUser) {
                        // we already have this record
                        // tell passport to continue, we are good.
                        done(err, existingUser);
                    } else {
                        // must be new user
                        // google profile contains id which uniquely and permanently identifies a user
                        new User({googleId: profile.id}).save()
                            // we dont tell passport we are done till the DB save is successful
                            .then(newlySavedUser => done(err, newlySavedUser));
                    }
                });
        }
    )
);
