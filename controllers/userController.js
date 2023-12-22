const User=require("../models/User");

async function getAllUsers(req,res)
{
    try
    {
        const users=await User.find();
        res.status(201).json({data: users});
    }
    catch(error)
    {
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    getAllUsers,
};