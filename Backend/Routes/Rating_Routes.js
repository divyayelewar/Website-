const express = require('express')
const router = express.Router();
const Rating_Controller=require('../Controllers/Rating_Controllers')

router.post('/add',Rating_Controller.createRating);
router.put('/update', Rating_Controller.updateRating);
router.delete('/delete/:ratingId', Rating_Controller.deleteRating);
router.get('/user/:userId', Rating_Controller.getRatingByUser);
router.get('/getall',Rating_Controller.getAll);

module.exports = router;
