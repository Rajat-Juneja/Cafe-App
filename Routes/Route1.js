const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const mailer = require('../config/Mailer');
const FoodOperations = require('../db/Operations/Food');

const storageEngine = multer.diskStorage({
    destination:'./public/src/images/',
    filename:function(req,file,callback){
        callback(null,file.fieldname+'-'+Date.now() + path.extname(file.originalname));
    }
});

var object={};

const upload = multer({
    storage:storageEngine,
    limits:{fileSize:5000000}
}).single('myImage');

router.post('/feedback',(req,res)=>{
    var Message = 'This is a suggestion/complain/feedback from '+req.body.name+' having Email Id '+req.body.email+' and \n The message is : '+req.body.message;
    mailer(Message);
});

router.get('/menu',(req,res)=>{
    FoodOperations.getProds((err,data)=>{
        if(err){
            res.json({"success":"false"});
        }
        else{
            res.json({"data":data});
        }
    })
});

router.get('/menuprod/:name',(req,res)=>{
    var name = req.params.name;
    FoodOperations.getProd(name, (err,data)=>{
        if(err){
            res.json({"success":"false"});
        }
        else{
            res.json({"data":data});
        }
    });
})

router.post('/update',(req,res)=>{
    var src = '/src/images/';
    if(req.body.id){
        object=req.body;
    }
    upload(req,res,(err)=>{
        if(err){
        res.json({"error":err});
        }
        else{
            if(req.file || object){
                if(req.file){
            object.image = src+req.file.filename;
        }
        console.log("OBJECT IS",object);
            FoodOperations.updateProd(object,(err,data)=>{
                if(err){
                    res.json({"error":err});
                }
                else{
                    console.log("New data is",data);
                    res.redirect('back');
                }

            });
        }
        }
    })
})

module.exports = router;