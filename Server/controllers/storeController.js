const storeModel = require('../models/storeSchema.js');

const createNewStore = async (req, res, next) => {
  const newStore = new storeModel(req.body);
  try{
    const saveStore = await newStore.save();
    res.status(200).json(saveStore);
  }catch(err){
    next(err)
  }
};
//Update
const updateStore = async(req,res,next)=>{
  try{
    const updateStore = await storeModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateStore);
  }catch(err){
    next(err)
  }
}
//Delete
const deleteStore = async(req,res,next)=>{
  try{
    await storeModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Store Deleted")
  }catch(err){
    next(err)
  }
}
//Get 
const getStore = async(req,res,next)=>{
  try{
    const store = await storeModel.findById(req.params.id);
    res.status(200).json(store)
  }catch(err){
    next(err)
  }
}
//Get All
const getAllStores = async(req,res,next)=>{
  try{
    const stores = await storeModel.find({})
    res.status(200).json(stores)
  }catch(err){
    next(err)
  }
}
module.exports = { createNewStore,updateStore,deleteStore,getStore,getAllStores };
