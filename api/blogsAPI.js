//Initilize and activate express and router.
const express = require('express');
const BlogModel = require('../models/blogModel');
const router = express.Router();

//API To Post Blogs And Add The Document To The Database. We use the model and the schema within to organize our data.
router.post('/', (req, res) => {
    BlogModel.create(req.body)
    .then(model => {
        res.send(model);
    });
});

//API To Delete Blogs In The Database. We the id to find and delete the specific document.
router.delete('/:id', (req, res) => {
    BlogModel.findByIdAndDelete({_id: req.params.id})
    .then(deletedBlog => {
        res.send(deletedBlog);
    });
});

//API To Update Blogs In The Database. We use the unique Id to update a specific document and we send a updated object for the document.
router.put('/:id', (req, res, next) => {
    BlogModel.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        BlogModel.findOne({_id: req.params.id}, req.body)
        .then(blog => {
            res.send(blog);
        });
    });//TEST & FIX THIS IS DEPRECATED!
});

//API To Read All The Blogs And Display Them To The Client.
router.get('/', (req, res) => {
    BlogModel.find().sort({createdAt: -1})
    .then(blog => {
        res.render('blogsList', {title: "This Is The List Of Blogs", blogs: blog});
    });
});

module.exports = router;
