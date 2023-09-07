const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
//all routes start with /api/categories
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProducts);
router.post('/', ProductController.createProducts);
router.put('/:id', ProductController.updateProducts);
module.exports = router;
