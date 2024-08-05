const express = require("express");
const { userCreate, userLogin } = require("../controllers/userContro");
const UserRouter = express.Router();


UserRouter.post("/register",userCreate);
UserRouter.post("/login",userLogin);

module.exports=UserRouter

