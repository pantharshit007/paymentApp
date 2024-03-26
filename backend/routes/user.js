const express = require('express');
const userRouter = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');

const { signup, signin } = require('../controllers/auth');
const { userUpdate, getUserInfo } = require('../controllers/userController');

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
//update user Info
userRouter.put('/', authMiddleware, userUpdate);
//filter: user
userRouter.get('/bulk', getUserInfo)

module.exports = userRouter;