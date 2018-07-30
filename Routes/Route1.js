const express = require('express');
const router = express.Router();
const path = require('path');
const mailer = require('../config/Mailer');


router.post('/feedback',(req,res)=>{
    // res.json({"First":"Working"});
    var Message = 'This is a suggestion/complain/feedback from '+req.body.name+' having Email Id '+req.body.email+' and \n The message is : '+req.body.message;
    mailer(Message);
});

module.exports = router;