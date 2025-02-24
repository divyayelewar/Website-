const express = require('express');

const router = express.Router();



const productController = require ('../Controllers/productControler');




router.get('/', productController.getAllProducts);
router.get('/id/:id', productController.findProductById);
router.post('/register',  productController.createProduct);
router.delete('/:id',  productController.deleteProduct);
router.put('/:id',  productController.updateProduct);


module.exports = router;