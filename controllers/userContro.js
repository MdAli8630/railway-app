const UserModel = require("../models/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const SECRET_KEY = "NOTESAPI"



const userCreate = async (req, res) => {
    const { name, email, password } = req.body;
   
    if (!name) {
        return res.status(422).json({ success: false, message: "name is required" })
    }
    if (!email) {
        return res.status(422).json({ success: false, message: "email is required" })
    }
    if (!password) {
        return res.status(422).json({ success: false, message: "password is required" })
    }
    try {

        const existingUser = await UserModel.findOne({ email: email })
        if (existingUser) {
            return res.status(422).json({ success: false, message: "user already exist" })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new UserModel({ name, email, password: hashPassword });
        await user.save();
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY)
        res.status(201).json({ success: true, data: user, token: token, message: "User have been created" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: "Something went wrong" })
    }

}

const userLogin = async (req,res)=>{
    const {email,password} = req.body;

    try{
    const user = await  UserModel.findOne({email:email})
    if(!user){
      return res.status(400).json({ success: false, message: "Invalid credentials"})
    }

    const matchPassword =await bcrypt.compare(password,user.password)
    if(!matchPassword){
        return res.status(400).json({ success: false, message: "Invalid Password!"})
    }
    res.status(200).json({success:true,message: "User Login Successfully!",user:user})
   
    }catch(err){
        console.log(err)
        return res.status(500).json({success:false,message:"Something went wrong"})
    }

}





module.exports={userCreate,userLogin}