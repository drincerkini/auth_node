const express = require('express');
const authController = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

//validation middleware
const validateRegister = [
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
];

//api route for register
router.post('/register', validateRegister, authController.registerUser);

//api route for login
router.post('/login', validateRegister, authController.loginUser);

module.exports = router;