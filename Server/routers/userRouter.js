const express = require('express');
const router = express.Router();
const { getAllUsers, createNewUser,updateUser,deleteUser, getUser } = require('../controllers/userController');

router.get('/',getAllUsers)
router.get('/:id',getUser)
router.post('/', createNewUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;
