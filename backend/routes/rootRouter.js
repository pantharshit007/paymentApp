
const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const accountRouter = require('./account')
// If we want to import a router inside a router we will use : router.use('/route',call)

router.use('/user', userRouter);
router.use('/account', accountRouter);


module.exports = router;