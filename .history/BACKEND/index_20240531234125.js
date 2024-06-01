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
.catch((error)=>console.error("failde to connect mongo DB",error));


//4 ) GLOBAL ERROR HANDLER

app.use((err,req,req,next)=>{

    err.stateCode = err.stateCode || 500;
    err.status = err.status || 'error';

});


//5 SERVER
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Sever running on ${PORT}`)
});
