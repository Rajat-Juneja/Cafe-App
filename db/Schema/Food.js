const mongoose = require('../Connection');
const solidSchema = mongoose.Schema;
var solid = new solidSchema({
    type:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discounted_price:{
        type:Number,
        require:true
    },
    availability:{
        type:Boolean,
        required:false
    },
    image:{
        type:String,
    },
    desc:{
        type:String
    },
    quantity:{
        type:Number,
        required:true
    }
});

// Type key is for if the food is solid/liquid


var Solid = mongoose.model("solid",solid);
module.exports = Solid;