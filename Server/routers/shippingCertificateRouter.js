const express = require('express');
const router = express.Router();
const { createShippingCertificate, updateShippingCertificate, deleteShippingCertificate, getShippingCertificate, getAllShippingCertificate } = require('../controllers/shippingCertificateController')

// Create
router.post('/', createShippingCertificate);
// Update
router.put('/:id', updateShippingCertificate);
// // Delete
router.delete('/:id', deleteShippingCertificate);
// // Get
router.get('/:id', getShippingCertificate);
// // Get All
router.get('/', getAllShippingCertificate);

module.exports = router;