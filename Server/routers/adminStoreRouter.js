const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/authenticateToken')
const { createAdminStore, getAllAdminStore, getOneAdminStore, updateAdminStore, deleteAdminStore } = require('../controllers/adminStoreController');

router.get('/', getAllAdminStore);
router.get('/:id', verifyToken, getOneAdminStore);
router.post('/', createAdminStore);
router.put('/:id', updateAdminStore);
router.delete('/:id', deleteAdminStore)

module.exports = router;