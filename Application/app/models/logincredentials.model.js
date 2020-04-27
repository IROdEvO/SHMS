const mongoose = require("mongoose");
const LoginSchema = mongoose.Schema({
    _id:{type:String,required:true},
    Username:{type:String,required:true,index:true},
    Password:{type:String,required:true},
    AccountType:{type:String,required:true},
},
{
    timestamps: true
});
module.exports=mongoose.model('Login',LoginSchema);