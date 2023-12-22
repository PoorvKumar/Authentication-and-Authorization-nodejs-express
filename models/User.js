const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:
    {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    email: 
    {
        type: String,
        require: true,
        unique: true
    },
    password: 
    {
        type: String,
        require: true
    },
    roles:
    [{
        type: String,
        enum: ["user","admin","moderator"],
        default: ["user"]
    }],
    refreshToken:
    {
        type: String
    }
},
{
    timestamps: true
});

const User=mongoose.model("user",UserSchema);
module.exports=User;