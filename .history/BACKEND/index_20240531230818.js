const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app  = express();

//1)MIDDLEWARES
app.use(cors);
app.use(express.json());


//2) ROUTS


//3)MONGO DB CONNECTION
mongoose.connect('mongodb+srv://root:root@test.fsyl19m.mongodb.net/')
.then(()=>console.log('connected to mongo DB'))
.catch((err)=>console.log(err))

//4 SERVER
