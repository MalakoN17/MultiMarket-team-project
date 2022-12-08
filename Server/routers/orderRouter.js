const express = require("express");
const { createNewOrder, getOrder, updateOrder, getAllOrders, deleteOrder } = require("../controllers/orderController");

const router = express.Router();

//Create
router.post('/',createNewOrder)
//Update 
router.put('/:id',updateOrder)
//Delete
router.delete('/:id',deleteOrder)
//Get 
router.get('/:id',getOrder)
//Get all
router.get('/',getAllOrders)

module.exports = router;