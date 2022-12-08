const express = require('express');
const router = express.Router();
const { createAdminStore, getAllAdminStore, getOneAdminStore, updateAdminStore, deleteAdminStore } = require('../controllers/adminStoreController');

router.get('/', getAllAdminStore);
router.get('/:id', getOneAdminStore);
router.post('/', createAdminStore);
router.put('/:id', updateAdminStore);
router.delete('/:id', deleteAdminStore)

module.exports = router;