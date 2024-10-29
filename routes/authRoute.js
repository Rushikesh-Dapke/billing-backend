const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register Route
router.post('/register', authController.register);

// Login Route
router.post('/login', authController.login);

// Forgot password route
router.post('/forgot-password', authController.forgotPassword);

// Reset password route
router.post('/reset-password/:token', authController.resetPassword);

module.exports = router;