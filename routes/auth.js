const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
//create controller
router.post('/register', authController.register);
    


module.exports = router; 