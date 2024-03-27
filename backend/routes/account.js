const express = require('express');
const accountRouter = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');

const { getBalance, transferFunds } = require('../controllers/accountController');

accountRouter.get('/balance', authMiddleware, getBalance)
accountRouter.post('/transfer', authMiddleware, transferFunds)

module.exports = accountRouter;