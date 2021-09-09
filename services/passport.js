const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    // converted to async syntax
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })
            if (existingUser) {
                // we already have a user
                return done(null, existingUser);
            }

            // we do not have a user record with this ID, make a new record
            const user = await new User({ googleId: profile.id }).save()
            done(null, user);
    }
));

// (accessToken, refreshToken, profile, done) => {
//     User.findOne({
//         googleId: profile.id
//     }).then((existingUser) => {
//         if (existingUser) {
//             // we already have a user
//             done(null, existingUser);
//         } else {
//             // we do not have a user record with this ID, make a new record
//             new User({
//                 googleId: profile.id
//             }).save().then(user => done(null, user));
//         }
//     })
    // console.log('accessToken', accessToken);
    // console.log('refreshtoken', refreshToken);
    // console.log('profile', profile);
    // console.log('done', done)
// }