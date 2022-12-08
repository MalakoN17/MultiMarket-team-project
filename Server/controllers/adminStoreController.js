const adminStoreSchema = require('../models/adminStoreUserSchema');

const getAllAdminStore = async (req, res, next) => {
  try {
    const adminsStores = await adminStoreSchema.find({})
    res.status(200).json(adminsStores)
  } catch (error) {
    next(error);
  }
};
const getOneAdminStore = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const adminStore = await adminStoreSchema.findById(req.params.id);
        res.status(200).json(adminStore)
    } catch (error) {
        next(error)
    }
}
const updateAdminStore = async (req, res, next) =>{
    try {
        const updateAdminStore = await adminStoreSchema.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
        res.status(200).json(updateAdminStore)
    } catch (error) {
        next(error)
    }
}
const createAdminStore = async (req, res, next) => {
  try {
    const obj = req.body;
    const newAdminStore = adminStoreSchema(obj);
    await newAdminStore.save();
    res.status(200).json('create new admin');
  } catch (error) {
    next(error);
  }
};
const deleteAdminStore = async (req, res, next) =>{
    try {
        await adminStoreSchema.findByIdAndDelete(req.params.id);
        res.status(200).json("admin store Deleted")
    } catch (error) {
        next(error)
    }
}
module.exports = { createAdminStore, getAllAdminStore, getOneAdminStore, updateAdminStore, deleteAdminStore };
