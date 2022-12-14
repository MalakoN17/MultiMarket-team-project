const express = require('express');
const router = express.Router();
const {
  getAllProductsStore,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productsControllers');

router.get('/', getAllProductsStore);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
