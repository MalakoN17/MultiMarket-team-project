const orderModel = require('../models/orderSchema.js');

//Create
const createNewOrder = async (req, res, next) => {
  const newOrder = new orderModel(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    next(err);
  }
};
//Update
const updateOrder = async (req, res, next) => {
  try {
    const updateOrder = await orderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateOrder);
  } catch (err) {
    next(err);
  }
};
//Delete
const deleteOrder = async (req, res, next) => {
  try {
    await orderModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Order Deleted');
  } catch (err) {
    next(err);
  }
};
//Get
const getOrder = async (req, res, next) => {
  try {
    const order = await orderModel.findById(req.params.id);
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
//Get All
const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createNewOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};
