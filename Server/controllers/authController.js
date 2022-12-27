const jwt = require('jsonwebtoken');
const usersSchema = require('../models/userSchema');
const storeOwnersSchema = require('../models/ownerStoreUserSchema')
const bcrypt = require('bcryptjs');
// let refreshTokens = [];

// REFRESH TOKEN
// const refreshToken = async (req, res, next) => {
//   const refreshToken = req.body.token;
//   if (refreshToken == null) return res.sendStatus(401);
//   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     const accessToken = generateAccessToken(user.id)
//     res.json({ accessToken: accessToken })
//   })
// };

// REGISTER
const register = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password required');
  }

  const user = await usersSchema.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error('User is exist');
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const data = req.body;
    data.password = hashedPassword;
    data.createdBy = `${email}`
    const newUser = usersSchema(data);
    await newUser.save();
    res.status(200).json('user created');
  } catch (error) {
    next(error);
  }
};

// LOGIN
const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password required')
  }

  const user = await usersSchema.findOne({ email });
  const storeOwner = await storeOwnersSchema.findOne({ email });
  // console.log({user, storeOwner});

  // console.log(password);
  // console.log(user);

  try {
    // const hashedPassword = await bcrypt.compare(password, user.password);
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = generateAccessToken(user );
      res.json({ accessToken: accessToken, currentUser:user });
      // console.log(storeOwner);
    } 

     if(storeOwner && (await bcrypt.compare(password, storeOwner.password))){
      const accessToken = generateAccessToken(storeOwner );
      res.status(200).json({ accessToken: accessToken, currentUser:storeOwner });
      // console.log(storeOwner);
      return 
      } 

      if(!user && !storeOwner) {
      res.status(400);
      throw new Error('User is not exist');
    }
  } catch (error) {
    next(error);
  }
};

// ACCESS TOKEN
const generateAccessToken = (user) => {
  return jwt.sign({ ...user._doc }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30s',
  });
};

module.exports = { login, register };
