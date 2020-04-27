const mongoose = require("mongoose");
const validateEMail = require("validator");
const UserSchema = mongoose.Schema({
    NIC:{type:String,required:true,unique:true,index:true},
    FirstName:{required:true,type:String},
    MiddleName:String,
    Surname:{required:true,type:String},
    DOB:{type:Date,required:true},
    MobilePhone:String,
    HomeTelephone:String,
    Email:{
        type:String,
        validate:value=>{
            if(!validateEMail.isEmail(value)){
                throw new Error({error:'Invalid email address'});
            }
        }
    },
    AddressLine1:{type:String,required:true},
    AddressLine2:String,
    Hospital:String,
    Ward:String,   
    AreaOfExpertise:String,
    PatientType:String,
    DeviceID:String,
    AccountType:{
        type:String,
        required:true
    },
    Password:String
},
{
    timestamps: true
});
module.exports=mongoose.model('User',UserSchema);