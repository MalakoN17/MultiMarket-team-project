const couponModel = require('../models/couponSchema.js');
//Create
const createNewCoupon = async (req, res, next) => {
  const newCoupon = new couponModel(req.body);
  try {
    const saveCoupon = await newCoupon.save();
    res.status(200).json(saveCoupon);
  } catch (err) {
    next(err);
  }
};
//Update
const updateCoupon = async (req, res, next) => {
  try {
    const updateCoupon = await couponModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCoupon);
  } catch (err) {
    next(err);
  }
};
//Delete
const deleteCoupon = async (req, res, next) => {
  try {
    await couponModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Coupon Deleted');
  } catch (err) {
    next(err);
  }
};
//Get
const getCoupon = async (req, res, next) => {
  try {
    const coupon = await couponModel.findById(req.params.id);
    res.status(200).json(coupon);
  } catch (err) {
    next(err);
  }
};
//Get All
const getAllCoupons = async (req, res, next) => {
  try {
    const coupons = await couponModel.find({});
    res.status(200).json(coupons);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createNewCoupon,
  getAllCoupons,
  getCoupon,
  deleteCoupon,
  updateCoupon,
};
