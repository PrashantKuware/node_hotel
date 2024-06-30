const mongoose = require('mongoose');
// const mongoURL = 'mongodb://127.0.0.1:27017/hotel'; // Corrected the URL
const mongoURL = 'mongodb+srv://nittprashant6070:qwertyuiop12345@cluster0.peppswp.mongodb.net/';

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
