const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  info: {
    name: String,
    category: String,
    brand: String,
    size: Array,
    color: String,
    price: Number,
    photo: String,
    gender: String
  },
  tags: {
    priceRange: String,
    category: String,
    brand: String,
    size: Array,
    color: String,
    gender: String
  }
});

module.exports = mongoose.model('Product', productSchema);