const User = require('../models/UserModels');
const createError = require('../utils/')

//REGISTER USER
exports.signup  = async(req,res,next)=>{

    try{
        const user = await User.findOne({email:req.body.email});
        if(user){
            return next(new createError("User already exixts !",400));
        }
        const hashedPassword = await
    }catch(error){

    }
};

///LOGIN USER
exports.login = async(req,res,next)=>{};