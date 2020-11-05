const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcryptjs');
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
    console.log(req.body);

    try{
        // const salt  = await bcrypt.genSalt(10);
        // const Password = await bcrypt.hash(userPassword,salt);
        const user = await User.findOne({userEmail:userEmail});
        console.log(user);
        // if(!user){
        //     return res.json({'msg':'No user exist'});
        // }
        const decryptedPassword = await bcrypt.compare(userPassword,user.Password);
        console.log(decryptedPassword);
        // console.log({userEmail,Password});
        // const user = new User({userEmail,Password});
        // await user.save();
        // res.json(user);
        res.json({'msg':'password matched'});
        // if(decryptedPassword){
        //     res.json({'msg':'Password matched'});
        // }else{
        //     res.json({'msg':'Password did not match'});
        // }
        
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
        res.send('error!');
    }
})

module.exports = router;