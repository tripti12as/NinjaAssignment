const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Product');

const productRoutes = express.Router();

//to fetch data from db
productRoutes.route('/').get( (req, res) => {
  Product.find({
    tags: "Women"
  })
    .then((foundProduct) => {
      res.send(foundProduct);
    });
});

//to fetch product by id


module.exports = router;