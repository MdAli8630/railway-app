const ProductModel = require("../models/product");

const productCreate = async (req, res) => {
    const { name, product_type, price, city } = req.body;


    try {
        const product = new ProductModel({ name, product_type, price, city });
        await product.save();
        res.status(201).json({ success: true, data: product, message: "product have been created" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: "Something went wrong" })
    }

}

const getAllProduct = async (req,res)=>{
    try{
        const product = await ProductModel.find({})
        res.status(201).json({ success: true, data: product })

    }  catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: "Something went wrong" })
    }
}


module.exports = {productCreate,getAllProduct}