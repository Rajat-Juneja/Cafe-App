const mongoose = require('../Connection');
const foodSchema = mongoose.Schema;
var food = new foodSchema({
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
    },
    time:{
        type:String,
        required:true,
        default:'All'
    }
});


var Food = mongoose.model("foods",food);
module.exports = Food;

// type: whether it is liquid or solid or bread(naan,roti)
// availability is only true/false
// quantity: 1) Solids : in gm
//           2) Liquids : in ml
// exclusive : Whether they are exclusive to a day or available daily
// time : At which time of day will it be available,i.e., breakfast/lunch/dinner