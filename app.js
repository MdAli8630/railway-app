const express = require("express");
const UserRouter = require("./routes/userRoute");
const ProductRouter = require("./routes/productRoute");
require('dotenv').config();
require("./database/dbConn")

const app = express();




app.use(express.json())
const PORT = 8080 || process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.use("/api",UserRouter)
app.use("/api",ProductRouter)


app.listen(PORT,()=>{
    console.log("Server is Running...")
})