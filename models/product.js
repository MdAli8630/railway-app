const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{
        type:String
    },
    product_type:{
        type:String
    },
    price:{
        type:Number
    },
    city:{
        type:String
    }
},{
    timestamps:true
}
)

const Product = mongoose.model("Product",ProductSchema);

module.exports=Product