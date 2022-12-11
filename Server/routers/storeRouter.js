const express = require('express');
const router = express.Router();
const { createNewStore, updateStore, deleteStore, getStore, getAllStores } = require('../controllers/storeController');
//Create
router.post('/', createNewStore);

//Update
router.put('/:id',updateStore)
//Delete
router.delete('/:id',deleteStore)
//Get 
router.get('/:id',getStore)
//Get All
router.get('/',getAllStores)

module.exports = router;
