const ownerStoreUserSchema = require('../models/ownerStoreUserSchema.js');
const bcrypt = require('bcryptjs');

// GET all admin
const getAllAdminStore = async (req, res, next) => {
  try {
    const adminsStores = await ownerStoreUserSchema.find({});
    res.status(200).json(adminsStores);
  } catch (error) {
    next(error);
  }
};
// GET one admin by id
const getOneAdminStore = async (req, res, next) => {
  try {
    if (req.user._id === req.params.id) {
      // console.log(req.user);
      const adminStore = await ownerStoreUserSchema.findById(req.params.id);
      res.status(200).json(adminStore);
    }
    res.status(401).json('user not authorized');
  } catch (error) {
    next(error);
  }
};
// PUT update admin
const updateAdminStore = async (req, res, next) => {
  try {
    if (req.user._id === req.params.id) {
      const updateAdminStore = await ownerStoreUserSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateAdminStore);
    }
    res.status(401).json('user not authorized');
  } catch (error) {
    next(error);
  }
};
// POST create admin
const createAdminStore = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password required')
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const obj = req.body;
    obj.password = hashedPassword;
    const newAdminStore = ownerStoreUserSchema(obj);
    await newAdminStore.save();
    res.status(200).json('create new admin');
  } catch (error) {
    next(error);
  }
};
// DELETE admin
const deleteAdminStore = async (req, res, next) => {
  try {
    await ownerStoreUserSchema.findByIdAndDelete(req.params.id);
    res.status(200).json('admin store Deleted');
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createAdminStore,
  getAllAdminStore,
  getOneAdminStore,
  updateAdminStore,
  deleteAdminStore,
};
