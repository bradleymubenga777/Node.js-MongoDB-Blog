//Require Modules.
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./schema');

//Express App.
const app = express();

//Register View Engine.
app.set('view engine', 'ejs');
app.set('views', 'views');

//Setting Static Files Public.
app.use(express.static('public'));

//Connect To MongoDB.
const dbURI = 'mongodb+srv://bradley123:bradley123@cluster0.ivbdd.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//Listen for route GET requests on individual routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/create', (req, res) => {
    res.render('newBlog', {title: 'Create A New Blog'})
})


//Set blogs route to retrieve BSON blog data from MongoDB and display preview blogs. 
app.get('/blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('blogsList', {title: 'All blogs', blogs: result})
        })

        .catch((err) => {
            console.log(err);
        })
})

//Middleware to convert our values into BSON.
app.use(express.urlencoded({extended: true}));

//Post request to the server to add new blogs.
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })

        .catch((err) => {
            console.log(err);
        })
})


//Initializing route parameters that give each blog a unique route.
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then(result => {
            res.render('blog', {blog: result, title: result.title})
        })
});

//Adding A Button That Will Allow Administrators To Delete Blogs.
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/blogs'});
        })
        .catch(err => {
            console.log(err)
        })
})