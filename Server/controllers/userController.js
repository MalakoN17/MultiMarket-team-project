const usersSchema = require('../models/userSchema');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersSchema.find({});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await usersSchema.findById(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    if (req.user._id === req.params.id) {
      await usersSchema.findByIdAndUpdate(req.params.id, req.body);
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
