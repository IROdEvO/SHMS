const express = require('express');
const User = require('../models/User');
const auth = require("../middleware/auth");

const router = express.Router();

router.post('/users',async (req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user:token});

    }catch (error){
        res.status(404).send(error);
        console.log(error);
    }
});

router.post('/users/login',async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findByCredentials(email,password);
        if(!user){
            return res.status(404).send({
                error : 'Login failed. Invalid login credentials'
            });
        }
        const token = await user.generateAuthToken();
        res.send({user,token});
    }catch (error){
        res.status(400).send(error);
        console.log(error);
    }
});

router.get("/users/me",auth,async(req,res)=>{
    res.send(req.user);
});

module.exports = router
