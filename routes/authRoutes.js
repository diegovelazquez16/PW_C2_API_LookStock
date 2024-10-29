// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const checkRole = require('../middlewares/checkRole');

router.post('/register', checkRole(['admin']), authController.register);

router.post('/login', authController.login);

module.exports = router;
