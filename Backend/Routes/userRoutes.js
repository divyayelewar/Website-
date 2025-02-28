const express = require('express');

const router = express.Router();



const userController = require ('../Controllers/userControler');
const authenticate = require('../Middleware/authenticate');



router.get('/profile',authenticate,userController.getUserProfile);
router.get('/all-users', userController.getAllUser);



module.exports = router;