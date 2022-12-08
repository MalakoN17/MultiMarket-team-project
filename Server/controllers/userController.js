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
  try {
    const user = await usersSchema.findById({});
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const createNewUser = async (req, res, next) => {
  try {
    const obj = req.body;
    const newUser = usersSchema(obj);
    await newUser.save();
    res.status(200).json('create user');
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updateUser = await usersSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await usersSchema.findByIdAndDelete(req.params.id);
    res.status(200).json('User Deleted');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
};
