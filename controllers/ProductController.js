const Product = require('../models/Product');

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async createProducts (req, res) {
    try {
      const products = await Products.create(req.body);
      res.json(products);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Internal server error' });
    }  
  },
  async getSingleProducts(req, res) {
    try {
      const products = await Products.findByPk(req.params.id);
      res.json(products);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async updateProducts(req, res) {
    try {
      const productsId = req.params.id;
      const updatedProducts = req.body;
  
      const products = await Products.findByPk(productsId);
  
      if (!products) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      await products.update(updatedProducts);
  
      res.json(products);
    } catch (err) {
      console.error('Error updating product:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
};

