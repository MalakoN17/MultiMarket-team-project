const jwt = require('jsonwebtoken');
const usersSchema = require('../models/userSchema');
const bcrypt = require('bcryptjs')

// const register = async (req, res)=>{
//     const {email, password} = req.body

//     if(!email || !password){
//         res.status(400);
//         throw new Error('User is not exist')
//     }

//     const user = await usersSchema.findOne({ email });
//     if(!user){
//         res.status(400);
//         throw new Error('User is not exist')
//     }


//     const salt = await bcrypt.genSalt(10);
//     const 



// }
const login = async (req, res, next) => {
  const { email } = req.body;
  const user = await usersSchema.findOne({ email });
  try {
    const accessToken = generateAccessToken(user._id);
    res.json(accessToken);
  } catch (error) {
    next(error);
  }
};

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30s',
  });
};

module.exports = { login };
