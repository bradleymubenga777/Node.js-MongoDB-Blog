//Require Modules
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./schema');

//Express App
const app = express();

//Register View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Setting Static Files Public
app.use(express.static('public'));

//Connect To MongoDB
const dbURI = 'mongodb+srv://bradley123:bradley123@cluster0.ivbdd.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


app.get('/blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('blog', {title: 'All blogs', blogs: result})
        })

        .catch((err) => {
            console.log(err);
        })
})