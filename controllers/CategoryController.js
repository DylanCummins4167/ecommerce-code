const Category = require('../models/Category');

module.exports = {
  async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async createCategory (req, res) {
    try {
      const categories = await Category.create(req.body);
      res.json(categories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ error: 'Internal server error' });
    }  
  },
  async getSingleCategory(req, res) {
    try {
      const categories = await Category.findByPk(req.params.id);
      res.json(categories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async updateCategory(req, res) {
    try {
      const categoryId = req.params.id;
      const updatedCategory = req.body;
  
      const category = await Category.findByPk(categoryId);
  
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      await category.update(updatedCategory);
  
      res.json(category);
    } catch (err) {
      console.error('Error updating category:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
};
