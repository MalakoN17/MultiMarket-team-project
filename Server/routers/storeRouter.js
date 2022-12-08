const express = require('express');
const router = express.Router();
const { createNewStore } = require('../controllers/storeController');

router.post('/', createNewStore);

module.exports = router;
