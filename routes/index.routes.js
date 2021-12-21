var express = require("express");

var router = express.Router();

var UserRouter = require('./userRouter')

router.use('/',UserRouter)

module.exports=router;