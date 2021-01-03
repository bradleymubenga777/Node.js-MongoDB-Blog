//Require mongoose and initlize the Schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema & Model
const BlogSchema = new Schema ({
    author: {
        type: String,
        required: [true, 'Name field is required']
    },
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    snippet: {
        type: String,
        required: [true, 'Snippet field is required']
    },
    content: {
        type: String,
        required: [true, 'Content field is required']
    }
});

//Create a model for your schema above.
const BlogModel = mongoose.model('blogCollection', BlogSchema);

//Export model to use in server.
module.exports = BlogModel;

