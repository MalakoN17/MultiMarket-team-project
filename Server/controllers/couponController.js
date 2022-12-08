const couponModel = require('../models/couponSchema.js');

const createNewCoupon = async (req, res, next) => {
  const newCoupon = new couponModel(req.body);
  try {
    const saveCoupon = await newCoupon.save();
    res.status(200).json(saveCoupon);
  } catch (err) {
    next(err);
  }
};

module.exports.createNewCoupon = createNewCoupon;