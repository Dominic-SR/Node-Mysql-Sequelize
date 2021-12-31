const express = require('express');
const morgan = require('morgan');
var IndexRouter = require("./routes/index.routes")

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.listen(5000,()=>{
    console.log("Port Run on LocalHost:5000");
})