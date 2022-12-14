const express = require('express');
const router = express.Router();
const { createNewStore, updateStore, deleteStore, getStore, getAllStores, getAllStoresByCityName, getStoreByDepartment, getStoreBySection} = require('../controllers/storeController');
const { verifyToken } = require('../middleware/authenticateToken');

//Create
router.post('/', createNewStore);

//Update
router.put('/:id',updateStore)
//Delete
router.delete('/:id',deleteStore)
//Get 
router.get('/getByID/:id',getStore)

//Get All
router.get('/', getAllStores);

//Get by city name
router.get('/getByCity', getAllStoresByCityName);
// Get by department
router.get('/department/:departmentID', getStoreByDepartment);
//Get by section
router.get('/section/:sectionID',getStoreBySection)

router.get('/section/:sectionID', getStoreBySection);

module.exports = router;
