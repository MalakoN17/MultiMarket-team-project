const express = require('express');
const router = express.Router();

const { createNewCoupon, updateCoupon, deleteCoupon, getCoupon, getAllCoupons, } = require('../controllers/couponController.js');
const { couponProtect } = require('../middleware/couponMiddleware');

//Create
router.post('/', couponProtect, createNewCoupon);
//Update
router.put('/:id', couponProtect, updateCoupon);
//Deleted
router.delete('/:id', couponProtect, deleteCoupon);
//Get
router.get('/:id', getCoupon);

//Get all
router.get('/', getAllCoupons);
module.exports = router;
