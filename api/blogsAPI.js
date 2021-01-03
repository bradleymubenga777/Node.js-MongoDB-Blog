//Initilize and activate express and router.
const express = require('express');
const BlogModel = require('../models/blogModel');
const router = express.Router();

//API To Post Blogs And Add The Document To The Database. We use the model and the schema within to organize our data.
router.post('/', (req, res) => {
    BlogModel.create(req.body)
    .then(model => {
        res.send(model)
    })
    .catch(next);
});

module.exports = router;
