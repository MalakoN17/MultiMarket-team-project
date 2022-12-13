const express = require('express');
const router = express.Router();
const { createNewStore, updateStore, deleteStore, getStore, getAllStores, getAllStoresByCityName, getStoreByDepartment, getStoreBySection, getProductsInStore,updateProduct, addProductToStore, deleteProductInStore } = require('../controllers/storeController');
//Create
router.post('/', createNewStore);

//Update
router.put('/:id',updateStore)
//Delete
router.delete('/:id',deleteStore)
//Get 
router.get('/getByID/:id',getStore)
//Get All
router.get('/',getAllStores)

//Get by city name
router.get('/getByCity',getAllStoresByCityName)
// Get by department
router.get('/department/:departmentID',getStoreByDepartment)
//Get by section
router.get('/section/:sectionID',getStoreBySection)
//Get all products in store
router.get('/:id/products',getProductsInStore)
//Update Product
router.put('/:id/updateProduct',updateProduct)
//Add product to Store
router.post('/:id/createProduct', addProductToStore)
//Delete product in the store 
router.delete("/deleteProduct/:id",deleteProductInStore)



module.exports = router;
