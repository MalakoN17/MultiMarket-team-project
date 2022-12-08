const storeSchema = require('../models/storeSchema');

const createNewStore = async (req, res, next) => {
  try {
    const obj = req.body;
    const newStore = storeSchema(obj);
    await newStore.save();
    res.status(200).json('create store');
  } catch (error) {
    next(error);
  }
};

module.exports = { createNewStore };
