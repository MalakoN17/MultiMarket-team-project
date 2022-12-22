const express = require("express");

const {createNewDepartment, updateDepartment, deleteDepartment, getDepartment, getAllDepartments} = require("../controllers/departmentController.js")

const router = express.Router();

//Create
router.post('/',createNewDepartment)
//Update
router.put('/:departmentId',updateDepartment)
//Delete
router.delete('/:departmentId',deleteDepartment)
//Get 
router.get('/:departmentId',getDepartment)
///Get All
router.get('/',getAllDepartments)

module.exports = router;