const storeModel = require('../models/storeSchema.js');
//Create
const createNewStore = async (req, res, next) => {
  const newStore = new storeModel(req.body);
  try {
    const saveStore = await newStore.save();
    res.status(200).json(saveStore);
  } catch (err) {
    next(err);
  }
};
//Update
const updateStore = async (req, res, next) => {
  try {
    const updateStore = await storeModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateStore);
  } catch (err) {
    next(err);
  }
};
//Delete
const deleteStore = async (req, res, next) => {
  try {
    await storeModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Store Deleted');
  } catch (err) {
    next(err);
  }
};
//Get
const getStore = async (req, res, next) => {
  try {
    const store = await storeModel.findById(req.params.id);
    res.status(200).json(store);
  } catch (err) {
    next(err);
  }
};
//Get All
const getAllStores = async (req, res, next) => {
  try {
    const stores = await storeModel.find({});
    res.status(200).json(stores);
  } catch (err) {
    next(err);
  }
};

// Get by city name
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
    console.log(sectionID);
    const stores = await storeModel.find({
      'products.sectionId': sectionID,
    });
    res.status(200).json(stores);
  } catch (err) {
    next(err);
  }
};

//Get products in the store
const getProductsInStore = async (req, res, next) => {
  try {
    const store = await storeModel.findById(req.params.id);

    const productsStore = await Promise.all(
      store.products?.map((product) => {
        console.log(product);
        return product;
      })
    );
    res.status(200).json(productsStore);
  } catch (err) {
    next(err);
  }
};




const getProductInStore = async (req, res, next,productID) => {
  try {
    const store= await storeModel.findById(req.params.id);
    const product = store.products?.find((product)=>{
      return product._id = productID
    })
    res.status(200).json(product)
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
  getProductsInStore,
  getProductInStore,
};
