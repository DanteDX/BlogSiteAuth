const express = require('express');
const router = express.Router();
const BlogPostSchemaZ = require('../model/BlogPost');

router.post('/',async (req,res) =>{

    const {userName,BlogPost} = req.body;
    console.log(req.body);
    try{
        const blog = new BlogPostSchemaZ({userName,BlogPost});
        await blog.save();
        res.json(blog);
    }catch(err){
        res.json(err);
    }
})

module.exports = router;