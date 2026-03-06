const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
//route to get all users
router.get('/users/',userController.getAllUsers);
//route to search a user by id
router.get('/users/:id',userController.getUserById);
//rouse to create a new user
router.post('/users',userController.createUser);
//route to edit a user
router.put('/users',userController.updateUser);
//route to delete a user
router.delete('/users',userController.deleteUser);
module.exports=router;
