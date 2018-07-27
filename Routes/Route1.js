const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res)=>{
    res.json({"success":"true"});
});

router.get('/first',(req,res)=>{
    res.json({"First":"Working"});
});

module.exports = router;