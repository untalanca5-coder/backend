const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');


//Route to get all users
router.get('/users',userController.getAllUsers);


//rout to search users by id
router.get('/users/:id',userController.getUserById);

//route to searh by firstname
router.get('/users/:first_name',userController.getUserById);

//route to create a new user
router.post('/users',userController.createUser);

//route to edit a user
router.put('/users',userController.updateUser);

//route to delete a user
router.delete('/users',userController.deleteUser);

module.exports=router;