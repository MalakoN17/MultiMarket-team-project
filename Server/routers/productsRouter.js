const express = require('express');
const router = express.Router();
const {
  getAllProductsStore,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require('../controllers/productsControllers');

router.get('/store/:storeId', getAllProductsStore);
router.get('/:id', getProduct);
router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
