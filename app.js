//Importing/Requiring modules
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./schema');

//Setting up express server/app
const app = express();

//Connect to MongoDB database using mongoose
const dbURI = 'mongodb+srv://bradley123:bradley123@cluster0.ivbdd.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    //Listen for request on port 3000
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));



//Register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Make public folder public
app.use(express.static('public'));

//Listen to a get request for routes
app.get('/', (req, res) => {
    res.render('index', {title: "Hello Blog"})
});