const express = require("express");
const { productCreate, getAllProduct } = require("../controllers/productContro");
const auth = require("../middlewares/auth")

const ProductRouter = express.Router();


ProductRouter.post("/AddProduct",productCreate);
ProductRouter.get("/getAllPRoduct",auth,getAllProduct);

module.exports=ProductRouter

