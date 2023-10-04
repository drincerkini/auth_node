const express = require('express');
const authController = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

router.post('/register', [
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long!'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long!')
], authController.registerUser);

router.post('/login', [
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long!'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long!')
], authController.loginUser);

module.exports = router;