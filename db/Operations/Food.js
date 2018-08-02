const schema = require('../Schema/Food');

const dbOperations = {
    getProds(callback){
        schema.find((err,data)=>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,data);
            }
        });
    },
    getProd(name,callback){
        schema.find({"name":name},(err,data)=>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,data);
            }
        });
    },
    updateProd(obj,callback){
        schema.findByIdAndUpdate(obj.id,{$set:obj},{new:true},(err,data)=>{
            if(err){
                     callback(err,null);
                 }
                 else{
                     callback(null,data);
                 }
        })
    }
};

module.exports = dbOperations;