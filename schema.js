//Import/Require Modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Blog Schema
const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {timestamps: true});

//Define Model
const Blog = mongoose.model('Blog', blogSchema);

//Export Schema
module.exports = Blog;