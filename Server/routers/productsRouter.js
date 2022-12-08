const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createNewProduct, updateProduct, deleteProduct } = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createNewProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
