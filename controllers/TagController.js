const Tag = require('../models/Tag');

module.exports = {
  async getAllTags(req, res) {
    try {
      const tags = await Tag.findAll();
      res.json(tags);
    } catch (err) {
      console.error('Error fetching tags:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
