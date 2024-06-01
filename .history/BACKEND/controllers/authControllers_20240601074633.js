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
        const token = jwt.sign({_id:newUser._id},'secretkey123',{
                expiresIn:'90d',
        });

        res.status(201).json({
            status:'succsess',
            message:'User registerd Succsessful',
            token,
        })
;    }catch(error){
        next(error);
    }
};

///LOGIN USER
exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;

        const user  = await User.findOne({email});
        if(!user) return next(new createError("User not Found!",404));
        const isPasswordValid = await bcrypt.compare(password,user.password);


        if(!isPasswordValid){
            return next(new createError("Incorrect email or password",401));
        }

        const token = jwt.sign({_id:newUser._id},'secretkey123',{
            expiresIn:'90d',
    });



    res.status(200).json({
        status:''

    })
    }catch(error){



    }
};