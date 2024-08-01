const User = require("../models/Users.js");

const createUser = async (req,res) => {
    const {device} = req.body;
    console.log(device)
    if(!device){
       return res.status(400).json({
        message:"Device not found",
       }) 
    }
    await User.create({device});
    res.status(200).json({
        message:"User created Successfully",
    })
}
const getExistingUserCount = async (req,res) => {
    try{
       const response = await User.find({})
       console.log(response);
       res.status(200).json({
        message:"Counted.",
        response
       })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

module.exports = {createUser,getExistingUserCount}