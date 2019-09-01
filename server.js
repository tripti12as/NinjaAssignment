const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;

const app = express();

let Product = require('./models/product');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CONNECTION_URL = "mongodb+srv://triptigarg:Tanuakx1206@clustertripti-eliei.azure.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "productdb";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });
const connection = mongoose.connection;

//const MongoClient = require("mongodb").MongoClient;
//const ObjectId = require("mongodb").ObjectID;

connection.once('open', function() {
    console.log("MongoDB cluster connection established successfully");
})

app.listen(PORT, () => {
    console.log("Server is now running on Port: " + PORT);
});

const productRoutes = require('./routes/productRoutes');
app.use('/products/women/tops', productRoutes);