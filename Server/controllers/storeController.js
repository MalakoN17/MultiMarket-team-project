const storeModel = require('../models/storeSchema.js');
//Create Store
const createNewStore = async (req, res, next) => {
  const newStore = new storeModel(req.body);
  try {
    const saveStore = await newStore.save();
    res.status(200).json(saveStore);
  } catch (err) {
    next(err);
  }
};
//Update Store
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
//Delete Store
const deleteStore = async (req, res, next) => {
  try {
    await storeModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Store Deleted');
  } catch (err) {
    next(err);
  }
};
//Get Store
const getStore = async (req, res, next) => {
  try {
    const store = await storeModel.findById(req.params.id);
    res.status(200).json(store);
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
    console.log(sectionID);
    const stores = await storeModel.find({
      'products.sectionId': sectionID,
    });
    res.status(200).json(stores);
  } catch (err) {
    next(err);
  }
};

//Get all products in the store
const getProductsInStore = async (req, res, next) => {
  try {
    const store = await storeModel.findById(req.params.id).select('products');
    res.status(200).json(store);
  } catch (err) {
    next(err);
  }
};

//Create Product
const addProductToStore = async (req, res, next) => {
  const storeID = req.params.id;
  try {
    await storeModel.updateOne(
      { '_id': req.params.id },
      {
        $push: {
          products: req.body,
        },
      }
    );
    res.status(200).json("succes")
  } catch (err) {
    next(err);
  }
};

//Update products in the array
const updateProduct = async (req, res, next) => {
  try {
    await storeModel.updateOne(
      { 'products._id': req.params.id },
      {
        $set: {
           "products": {_id:req.params.id}
        },
      }
    );
    res.status(200).json('Product update');
  } catch (err) {
    next(err);
  }
};

//Delete product in the array from the specific store

const deleteProductInStore= async(req,res,next)=>{
  try {
    await storeModel.updateOne({
    "products._id": req.params.id},
    {$pull:
      {
        "products": {_id:req.params.id} 
    }}
    )
    res.status(200).json('Product Deleted');
    
  } catch (error) {
    next(error)
  
  }
}

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
  updateProduct,
  addProductToStore,
  deleteProductInStore
};



// {"_id":{"$oid":"63974d1f3f81a02254f08d1c"},"bnNumber":{"$numberInt":"5856589"},"name":"meet aviel","coverImage":"dasdasdasdasd","departmentIds":["6391e623e90d2f2246c0021a"],"products":[{"name":"רועי קפה","active":true,"parallelImporter":false,"salesQuantity":{"$numberInt":"0"},"productStock":null,"_id":{"$oid":"639896ee2042fce652f74058"},"expirationDate":{"$date":{"$numberLong":"1670944494688"}},"lastUpdate":{"$date":{"$numberLong":"1670944494688"}},"createdAt":{"$date":{"$numberLong":"1670944494688"}}},{"barcode":"85255","image":"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png","name":"יריכיים","price":{"$numberInt":"6"},"priority":{"$numberInt":"1"},"sectionId":{"$oid":"63974b0df3ee5834ef22439a"},"kosherType":"רבנות","productTag":"surfaces","subCategory":"chicken breast","active":true,"weight":{"inWeight":false,"avgWeightPerUnit":{"$numberInt":"200"},"weightUnit":"grams"},"units":{"unitsInCarton":{"$numberInt":"1"},"amount":{"$numberInt":"1"},"minimumOrderCartonCount":{"$numberInt":"1"},"measureUnits":"units"},"contactInfo":{"contactNumber":"000-333","contactName":"avishay"},"manufacturer":"vdafppppppppp","parallelImporter":true,"brand":"nike","salesQuantity":{"$numberInt":"1"},"productStock":{"$numberInt":"1"},"description":"nike chicken breast","createdBy":"avishay","_id":{"$oid":"639897272042fce652f7405a"},"expirationDate":{"$date":{"$numberLong":"1670944551854"}},"lastUpdate":{"$date":{"$numberLong":"1670944551854"}},"createdAt":{"$date":{"$numberLong":"1670944551854"}}}],"active":true,"createdBy":"roy mekonen","lastUpdate":{"$date":{"$numberLong":"1670860063920"}},"createdAt":{"$date":{"$numberLong":"1670860063920"}},"__v":{"$numberInt":"0"}}