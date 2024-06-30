const express = require('express');
const app = express();
const db = require('./db'); // Ensure this path is correct
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => { // Corrected the path
  res.send('Welcome to hotel');
});

const menuItemRoutes = require('./routes/menuitemroutes');
app.use('/menuItems', menuItemRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
