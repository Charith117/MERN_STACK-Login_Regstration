const express = require('express');
const authController = require('../');

const router = express.Router();

router.post('/signup',authController.signup);
router.post('/login',authController.login);

