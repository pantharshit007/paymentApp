// backend/api/index.js
const express = require('express');
const router = express.Router();
// If we want to import a router inside a router we will use : router.use('/route',call)

const { signup, signin } = require('../controllers/auth')

router.post('/user/signup', signup);
router.post('/user/signin', signin);


module.exports = router;