const storeModel = require('../models/storeSchema.js');
const storeOwnerModel = require('../models/ownerStoreUserSchema')
const cloudinary = require('../utils/cloudinary')

//Create Store
const createNewStore = async (req, res, next) => {
  const data = req.body;
  try {
    if (data.coverImage) {
      const coverImage = await cloudinary.uploader.upload(data.coverImage, {
        folder: 'store',
      });
      const lightlogo = await cloudinary.uploader.upload(data.lightlogo, {
        folder: 'store',
      });
      const darklogo = await cloudinary.uploader.upload(data.darklogo, {
        folder: 'store',
      });
      data.coverImage = {
        public_id: coverImage.public_id,
        url: coverImage.secure_url,
      };
      data.lightlogo = {
        public_id: lightlogo.public_id,
        url: lightlogo.secure_url,
      };
      data.darklogo = {
        public_id: darklogo.public_id,
        url: darklogo.secure_url,
      };
      const newStore = new storeModel(data);
      await newStore.save();
      res.status(200).json('create store');
    }
  } catch (err) {
    next(err);
  }
};
//Update Store
const updateStore = async (req, res, next) => {
  const data = req.body
  try {
    const store = await storeModel.findById(req.params.id);
    if(store.coverImage !== data.coverImage.url){
      //  await cloudinary.uploader.destroy(store.coverImage.public_id);
      const result = await cloudinary.uploader.upload(data.coverImage, {
        folder: 'store',
      });
      data.coverImage = {
        public_id: result.public_id,
        url: result.secure_url
      }
    }
    if(store.lightlogo !== data.lightlogo.url){
      //  await cloudinary.uploader.destroy(data.lightlogo.public_id);
      const lightlogo = await cloudinary.uploader.upload(data.lightlogo, {
        folder: 'store',
      });
      data.lightlogo = {
        public_id: lightlogo.public_id,
        url: lightlogo.secure_url
      }
    }
    if(store.darklogo !== data.darklogo.url){
      // await cloudinary.uploader.destroy(data.darklogo.public_id);
      const darklogo = await cloudinary.uploader.upload(data.darklogo, {
        folder: 'store',
      });
      data.darklogo = {
        public_id: darklogo.public_id,
        url: darklogo.secure_url
      }
    }
      const updateStore = await storeModel.findByIdAndUpdate(
        data.id,
        {
          $set: data,
        },
        { new: true }
      )
      res.status(200).json(updateStore);
   
  } catch (err) {
    console.log(err);
  }
};
//Delete Store
const deleteStore = async (req, res, next) => {
  const storeOwner = await storeOwnerModel.findById(req.user._id);
  try {
    if(storeOwner?.storeIds.includes(req.params.id)){
    await storeModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Store Deleted');
  }
  res.status(401).json('user not authorized !');
  } catch (err) {
    next(err);
  }
};
//Get Store
const getStore = async (req, res, next) => {
  const storeOwner = await storeOwnerModel.findById(req.user._id);
  // console.log(storeOwner);
  try {
    if(storeOwner?.storeIds.includes(req.params.id)){
    const store = await storeModel.findById(req.params.id);
    res.status(200).json(store);
    }
    res.status(401).json('user not authorized !');
  } catch (err) {
    next(err);
  }
};
//Get All Stores
const getAllStores = async (req, res, next) => {
  try {
    const stores = await storeModel.find({});
    res.status(200).json(stores);
  } catch (err) {
    next(err);
  }
};

// Get by Store city name
const getAllStoresByCityName = async (req, res, next) => {
  const city = req.query.city;
  try {
    const stores = await storeModel.find({ 'address.city': city });

    res.status(200).json(stores);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// Get stores by department
const getStoreByDepartment = async (req, res, next) => {
  try {
    const { departmentID } = req.params;
    console.log(departmentID);
    const stores = await storeModel.find({
      departmentIds: departmentID,
    });
    res.status(200).json(stores);
  } catch (err) {
    next(err);
  }
};

//Get stores by section
const getStoreBySection = async (req, res, next) => {
  try {
    const { sectionID } = req.params;
    const stores = await storeModel.find({ _id: id });
    res.status(200).json(stores);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createNewStore,
  updateStore,
  deleteStore,
  getStore,
  getAllStores,
  getAllStoresByCityName,
  getStoreByDepartment,
  getStoreBySection,
};

