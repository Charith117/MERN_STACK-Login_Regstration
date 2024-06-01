const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRouter = require('../BACKEND/routes/authRoute');

// 1) MIDDLEWARES
app.use(cors()); // Invoke the cors function
app.use(express.json());

// 2) ROUTES
app.use('/api/auth', authRouter);

// 3) MONGODB CONNECTION
mongoose.connect('mongodb+srv://root:root@test.fsyl19m.mongodb.net/')
    .then(() => console.log('connected to mongo DB'))
    .catch((error) => console.error('failed to connect to mongo DB', error));

// 4) GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
    next(err); // Call next with the error object
});

// 5) SERVER
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
