const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
var IndexRouter = require()

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/', IndexRouter);


application.listen(5000,()=>{
    console.log("Port Run on LocalHost:5000");
})