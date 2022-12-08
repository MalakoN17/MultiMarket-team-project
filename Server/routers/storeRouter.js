const express = require('express');
const router = express.Router();
const { createNewStore } = require('../controllers/storeContrller');

router.post('/', createNewStore);

module.exports = router;
