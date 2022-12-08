const express = require("express");
const { updateCoupon } = require("../controllers/couponController.js");

const {createNewDepartment, updateDepartment, deleteDepartment, getDepartment, getAllDepartments} = require("../controllers/departmentController.js")

const router = express.Router();

//Create
router.post('/',createNewDepartment)
//Update
router.put('/:id',updateDepartment)
//Delete
router.delete('/:id',deleteDepartment)
//Get 
router.get('/:id',getDepartment)
///Get All
router.get('/',getAllDepartments)

module.exports = router;