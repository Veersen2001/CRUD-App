// here we use function and send to routes

const User = require('../models/userModel.js')
exports.home = (req,res)=>{
    res.send("hello world");
}

exports.createUser = async(req,res)=> {
    // extract info
    try{
        const {name, email} = req.body
        const user = await User.create({
            name,
            email

           
        })
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user
        })

       
    }
    catch(error)
    {
        console.log(error);
         res.status(400).json({
            success:false,
            message:error.message,
         
        })
    }
}