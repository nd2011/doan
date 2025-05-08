const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');

// Đăng nhập
router.get('/login', authController.loginForm); // GET /auth/login
router.post('/login', authController.login); // POST /auth/login

// Đăng ký
router.get('/signup', authController.signupForm); // GET /auth/signup
router.post('/signup', authController.signup); // POST /auth/signup

// Đăng xuất
router.get('/logout', authController.logout); // GET /auth/logout

// Quản lý người dùng
router.get('/users', authController.listUsers); // GET /auth/users
// GET /auth/users/:id
router.post('/users/:id/delete', authController.deleteUser); // POST /auth/users/:id/delete

module.exports = router;
