const Tag = require('../models/Tag');

module.exports = {
  async getAllTags(req, res) {
    try {
      const tags = await Tags.findAll();
      res.json(tags);
    } catch (err) {
      console.error('Error fetching tags:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async createTags (req, res) {
    try {
      const tags = await Tags.create(req.body);
      res.json(tags);
    } catch (err) {
      console.error('Error fetching tags:', err);
      res.status(500).json({ error: 'Internal server error' });
    }  
  },
  async getSingleTags(req, res) {
    try {
      const tags = await Tags.findByPk(req.params.id);
      res.json(tags);
    } catch (err) {
      console.error('Error fetching tags:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async updateTags(req, res) {
    try {
      const tagsId = req.params.id;
      const updatedTags = req.body;
  
      const tags = await Tags.findByPk(tagId);
  
      if (!Tags) {
        return res.status(404).json({ error: 'Tag not found' });
      }
  
      await tags.update(updatedTag);
  
      res.json(tags);
    } catch (err) {
      console.error('Error updating Tag:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
};

