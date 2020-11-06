const mongoose = require('mongoose');
const BlogPostSchema = new mongoose.Schema({
    userName:String,
    BlogPost:String
});

module.exports = BlogPostSchemaZ = mongoose.model('blogpost',BlogPostSchema);