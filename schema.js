//Require Mongoose
const mongoose = require("mongoose");

//Declare Schema Variable
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
}, {timestamps: true});

//Store Schema In A Variable Model
const Blog = mongoose.model('Blog', blogSchema);

//Export Schema
module.exports = Blog;


