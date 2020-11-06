const express = require('express');
const router = express.Router();
const BlogPostSchemaZ = require('../model/BlogPost');


router.get('/',async(req,res)=>{
    try{
        const allBlogs = await BlogPostSchemaZ.find();
        res.json(allBlogs);
    }catch(err){
        res.json(err);
    }
})

module.exports = router;