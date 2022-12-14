const express = require('express');
const router = express.Router();
const {createCheckoutPay} = require('../controllers/stripeController')

router.post('/create-checkout-session', createCheckoutPay)

module.exports = router;