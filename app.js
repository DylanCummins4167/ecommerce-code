// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/categories', require('./routes/categories'));
app.use('/api/products', require('./routes/products'));
app.use('/api/tags', require('./routes/tags'));

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
module.exports=app
