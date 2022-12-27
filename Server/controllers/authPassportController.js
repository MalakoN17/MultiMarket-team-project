const passport = require('passport');
const { generateAccessToken } = require('../controllers/authController');

const successLogin = async (req, res, next) => {
  try {
    if (req.user) {
      const user = req.user;
      const accessToken = generateAccessToken(user);
      res.status(200).json({ accessToken: accessToken, currentUser: user });
    }
  } catch (error) {
    next(error);
  }
};

const failedLogin = async (req, res, next) => {
  try {
    res.status(401).json({
      success: false,
      message: 'failure',
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    req.logout();
    res.redirect('http://localhost:3000');
  } catch (error) {
    next(error);
  }
};



module.exports = {
  successLogin,
  failedLogin,
  logout,
};
