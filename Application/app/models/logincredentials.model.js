const mongoose = require("mongoose");
const LoginSchema = mongoose.Schema({
    Username:{type:String,required:true,index:true},
    Password:{type:String,required:true},
    AccountType:{type:String,required:true},
    UserNIC:{type:String,required:true,index:true}
},
{
    timestamps: true
});
module.exports=mongoose.model('Login',LoginSchema);