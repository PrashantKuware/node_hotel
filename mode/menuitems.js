const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    enum: ["sweet", "sour", "spicy", "bitter"],
  },
  is_drink: {
    type: Boolean,
    default: true
  },
  ingredients: {
    type: [String], // Corrected the type to array of strings
    default: []
  },
  no_sales: {
    type: Number,
    default: 0
  }
});

const MenuItem = mongoose.model('MenuItem', menuSchema); // Corrected the model name
module.exports = MenuItem; // Corrected the export
