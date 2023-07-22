// here we use function and send to routes

const User = require('../models/userModel.js')
exports.home = (req,res)=>{
    res.send("hello world");
}

// create user
exports.createUser = async(req,res)=> {
    // extract info
    try{
        const {name, email} = req.body

        if(!name || !email)
        {
            throw new Error("Name and email are required")

        }

        const userExist = User.findOne({email})
        
        if(userExist)
        {
            throw new Error("User already exists")
        }
        //email:email
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

// get(fetch) all users
exports.getUsers =async(req,res)=>{
    try{
        //Data com from in array format from database
        const users = await User.find({}) //all users if we can take from email then we will use {email}
        if(!users){
            
        }
        res.status(200).json({
            success:true,
          users
        })
    }
    catch{
         console.log(error);
         res.status(400).json({
            success:false,
            message:error.message,
         
        })
    }
}


// delete user

exports.deleteUsers =async (req,res)=>{
    try{
        // we take user data from two ways: url and body
        //parameter(params)
        const userId = req.params.id
        const  user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:"user deleted successfully"
        })
    }
    catch(error){
         console.log(error);
         res.status(400).json({
            success:false,
            message:error.message,
         
        })
    }
}

exports.editUsers =async (req,res)=>{
    try{
        // we take user data from two ways: url and body
        //parameter(params)
       
        const  user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success:true,
            message:"user updated successfully"
        })
    }
    catch(error){
         console.log(error);
         res.status(400).json({
            success:false,
            message:error.message,
         
        })
    }
}


