const express = require('express');
const BlogModel = require('../models/blogModel');
const router = express.Router();

//Listen for get requests on routes that are not endpoints.
router.get('/', (req, res) => {
    res.send('Home Page, I am using express Router')
});

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    BlogModel.findById(id)
    .then(blog => {
        res.render('blog', {blog: blog, title: blog.title})
    })
})

module.exports = router;