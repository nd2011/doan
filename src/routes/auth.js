const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');


router.get('/login', authController.loginForm);//GET /auth/login
router.post('/login', authController.login);// POST /auth/login

router.get('/signup', authController.signupForm);// GET /auth/signup
router.post('/signup', authController.signup);// POST /auth/signup

router.get('/logout', authController.logout);// GET /auth/logout

module.exports = router;
