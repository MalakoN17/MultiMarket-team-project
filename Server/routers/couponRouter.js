const express = require('express');

const {
  createNewCoupon,
  updateCoupon,
  deleteCoupon,
  getCoupon,
  getAllCoupons,
} = require('../controllers/couponController.js');

const router = express.Router();

//Create
router.post('/', createNewCoupon);
//Update
router.put('/:id', updateCoupon);
//Deleted
router.delete('/:id', deleteCoupon);
//Get
router.get('/:id', getCoupon);

//Get all
router.get('/', getAllCoupons);
module.exports = router;
