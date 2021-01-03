//Require express & initilize app.
const express = require('express');
const app = express();
//Require body parser to respond to http requests.
const bodyParser = require('body-parser');
//Conncect to MongoDB via Mongoose.
const mongoose = require('mongoose');
//Require the BlogModel
const BlogModel = require('./models/blogModel');

//Set up express app
app.listen(process.env.port || 4000, function () {
    console.log('Now Listening For Requests!')
})

//Connect to MongoDB Database.
mongoose.connect('mongodb://localhost/expressBlog', {useNewUrlParser: true, useUnifiedTopology: true}); //MongoDB URI
mongoose.Promise = global.Promise;

//Body Parser Middleware
app.use(bodyParser.json());

//Middleware to handle erros.
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
})

//Use and activate the routes in router.js
app.use('/', require('./routes/router'));

//Use the CRUD API's for the blog.
app.use('/blogs', require("./api/blogsAPI"));