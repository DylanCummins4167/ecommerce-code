// seed.js
const sequelize = require('./db');
const Category = require('./models/Category');
const Product = require('./models/Product');
const Tag = require('./models/Tag');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    await sequelize.sync({ force: true });
    await Category.bulkCreate([
      { name: 'Category 1' },
      { name: 'Category 2' },
    ]);
    await Product.bulkCreate([
      { name: 'Product 1', price: 10.99 },
      { name: 'Product 2', price: 20.50 },
    ]);
    await Tag.bulkCreate([
      { name: 'Tag 1' },
      { name: 'Tag 2' },
    ]);
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    process.exit();
  }
})();

