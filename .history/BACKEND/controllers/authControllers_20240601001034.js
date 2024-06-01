const User = require('../models/UserModels');

//REGISTER USER
exports.signup  = async(req,res,next)=>{

    try{
        const user = await User.findOne({email:req.body.email});
        if(user){
            returnnect
        }
    }catch(error){

    }
};

///LOGIN USER
exports.login = async(req,res,next)=>{};