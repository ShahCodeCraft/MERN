const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : String,
    profilePic : String,
    role : String,


    fullName : String,
    address : String,
    city : String,
    state : String,
    country : String,
    pincode : Number,
    phoneNumber : Number,

    
},{
    timestamps : true
})


const userModel =  mongoose.model("user",userSchema)


module.exports = userModel