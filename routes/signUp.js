const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcryptjs');
const config = require('config');
const User = require("../model/User");

router.post('/',[
    check('userEmail',"A username is required").not().isEmpty(),
    check('userPassword',"Minimum Six Character").isLength({min:6})
],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()});
    }

    const {userEmail,userPassword} = req.body;

    try{
        const salt  = await bcrypt.genSalt(10);
        const Password = await bcrypt.hash(userPassword,salt);
        // const decryptedPassword = await bcrypt.compare(userPassword,Password);
        // console.log({userEmail,Password});
        const user = new User({userEmail,Password});
         const payload = {
            userId:{
                id:user.id
            }
        };
        await user.save();
        jwt.sign(payload,config.get('mySecret'),{expiresIn:3700},(err,token)=>{
            if(err) throw err;
            // const decoded = jwt.verify(token,"martinSecret");
            console.log(token);
            res.json({token});
        });
        
        // await user.save();
        // res.json(user);
        
        // const payload = {
        //     userInfomation:{userEmail,Password,decryptedPassword}
        // };
        // let userInfoToken =  undefined; 
        // jwt.sign(payload,'martinSecret',{expiresIn:120},(err,token)=>{
        //     if(err) throw err;
        //     const decoded = jwt.verify(token,"martinSecret");
        //     console.log(decoded);
        //     res.json({decoded});
        // });
        
        // res.json({userEmail,decryptedPassword});
    }catch(err){
        res.json(err);
    }
})

module.exports = router;