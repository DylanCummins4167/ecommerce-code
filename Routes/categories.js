const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
//all routes start with /api/categories
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getSingleCategory);
router.post('/', CategoryController.createCategory);
router.put('/:id', CategoryController.updateCategory);
module.exports = router;
