const router = require('express').Router();
const {
  successLogin,
  failedLogin,
  logout,
} = require('../controllers/authPassportController');
const passport = require('passport');

router.get('/login/success', successLogin);

router.get('/login/failed', failedLogin);

router.get('/logout', logout);

// for google
router.get('/google', passport.authenticate('google', ['profile', 'email']));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: '/login/failed',
  })
);

// for facebook
router.get('/facebook', passport.authenticate('facebook', ['profile', 'email']));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: '/login/failed',
  })
);

module.exports = router;
