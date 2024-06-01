const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            unique:true,
        },
        role:{
            type:String,
           default:"user",1
            
        },
        password:{
            type:String,
            required:true,
            
        }




})