const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL = process.env.MONGODB_URL_LOCAL; // Corrected the URL
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
  useNewUrlParser: true, // Corrected the option name
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB is connected to the database');
});

db.on('error', (err) => {
  console.error('MongoDB connection error', err);
});

db.on('disconnected', () => {
  console.log('Connection is disconnected');
});

module.exports = db;
