const express = require('express');
const accountRouter = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');

const { getBalance } = require('../controllers/accountController');

accountRouter.get('/balance', authMiddleware, getBalance)

module.exports = accountRouter;