const User = require('../models/UserModels');

//REGISTER USER
exports.signup  = async(req,res,next)=>{

    try{
        const user = await User.findOne({email:req.body.email});
    }
};

///LOGIN USER
exports.login = async(req,res,next)=>{};