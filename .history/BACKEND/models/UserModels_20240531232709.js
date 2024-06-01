const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            unique:true,
        },
        role:{
            type:String,
            required:true,
            unique:true,
        },
        password




})