const express = require('express');
const router = express.Router();
const TagController = require('../controllers/TagController');
//all routes start with /api/categories
router.get('/', TagController.getAllTags);
router.get('/:id', TagController.getSingleTags);
router.post('/', TagController.createTags);
router.put('/:id', TagController.updateTags);
module.exports = router;
