const express = require('express')
const router = express.Router();
// const {login,signup} = require('../controllers/auth');
const auth = require('../controllers/auth');
// complete request from index.js and solve it here
router.post('/signup',auth.signup)
router.post('/login',auth.login)
module.exports = router;
