const express = require("express");
const {verifyToken} = require('../middleware/authenticateToken')
const { createNewOrder, getOrder, updateOrder, getAllOrders, deleteOrder } = require("../controllers/orderController");

const router = express.Router();

//Create
router.post('/',createNewOrder)
//Update 
router.put('/:id',updateOrder)
//Delete
router.delete('/:id',deleteOrder)
//Get 
router.get('/:id',verifyToken,getOrder)
//Get all
router.get('/',getAllOrders)

module.exports = router;