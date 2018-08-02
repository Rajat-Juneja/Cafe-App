const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const routes = require('./Routes/Route1');
const path = require('path');



const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/',routes);


var server = app.listen(process.env.port|1234,()=>{
    console.log("Server Start at Port", server.address().port);
});