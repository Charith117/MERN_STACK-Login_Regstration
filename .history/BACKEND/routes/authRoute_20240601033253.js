// routes/authRoute.js
const express = require('express');
const authController = require('../controllers/authControllers');

console.log('authController:', authController); // Debugging log

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
