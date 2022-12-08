const express = require("express")

const {createNewCoupon} = require("../controllers/couponController.js")

const router = express.Router();

//Create 
router.post("/",createNewCoupon);

module.exports = router;