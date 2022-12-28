const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const usersModel = require('./models/userSchema');
require('dotenv');

const GOOGLE_CLIENT_ID = '663792248014-0l4su499ht0elnevp3qnqtvb20letoat.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

//////////////////
const FACEBOOK_APP_ID = '1647448025669768';
const FACEBOOK_APP_SECRET = 'd6a85c2c95ff7ecfae6c35bf22dd464a';

// strategy for google
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/auth/google/callback',
      scope: ['email', 'profile'],
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile.photos[0].value);
      try {
        const user = await usersModel.findOne({ google_id: profile.id });
        if (user) {
          done(null, user);
        } else {
          const newUser = new usersModel({
            google_id: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            profileImage: profile.photos[0].value,
            registerType:"google",
            phone: '00-00000',
          });
          await newUser.save();
          return done(null, newUser);
        }
      } catch (error) {
        throw error;
      }
    }
  )
);

// strategy for facebook
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
    scope: ['email', 'profile'],
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
