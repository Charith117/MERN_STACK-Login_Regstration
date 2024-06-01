const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModels');
const createError = require('../utils/appError');

//REGISTER USER
exports.signup  = async(req,res,next)=>{

    try{
        const user = await User.findOne({email:req.body.email});
        if(user){
            return next(new createError("User already exixts !",400));
        }
        const hashedPassword = await bcrypt.hash(req.body.password,12);

        const newUser = await User.create({
            ...req.body,
            password:hashedPassword,
        });
        //ASSIGN JWT(json web token) to user
        const token = jwt.sign({_id:newUser._id},'sc')
;    }catch(error){

    }
};

///LOGIN USER
exports.login = async(req,res,next)=>{};