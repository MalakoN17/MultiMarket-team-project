const usersSchema = require('../models/userSchema');
const bcrypt = require('bcryptjs')

const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersSchema.find({});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  // const id = req.params.id;
  try {
    if (req.user._id === req.params.id) {
    const user = await usersSchema.findById(req.params.id);
    res.status(200).json(user);
  }
  res.status(401).json('user not authorized');
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    if (req.user._id === req.params.id) {
      const updatedUser = req.body;
      updatedUser.password = hashedPassword;
      await usersSchema.findByIdAndUpdate(req.params.id, updatedUser);
      res.status(200).json('user updated');
    }
    res.status(401).json('user not authorized');
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    if (req.user._id === req.params.id) {
      await usersSchema.findByIdAndDelete(req.params.id);
      res.status(200).json('User Deleted');
    }
    res.status(401).json('user not authorized');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
