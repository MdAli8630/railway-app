const jwt = require('jsonwebtoken')

const auth = async (req,res,next)=>{
    try{
        let token = req.headers.authorization;

        // if(token){
        //     token=token.split(" ")[1]
        //        let user = jwt.verify(token,SECRET_KEY)
        //            req.userId=user.id
        // }else{
        //      res.status(401).json({messsage:"Unauthorized user"})
        // }
        //let token = req.headers.authorization;

          if(token){
            token = token.split(" ")[1]
            let user = jwt.verify(token,process.env.SECRET_KEY);
            req.userId=user.id
          }
          else{
                 res.status(401).json({messsage:"Unauthorized user"})
            }

        next()


    }catch(err){
            console.log("Hello")
            res.status(401).json({messsage:"Unauthorized user"})
    }
}
module.exports=auth