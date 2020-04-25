const mongoose = require("mongoose");
const PatientSchema = mongoose.Schema({
    _id:{type:String,required:true},
    FirstName:{required:true,type:String},
    MiddleName:String,
    Surname:{required:true,type:String},
    
    DOB:{type:Date,required:true},
    
    MobilePhone:String,
    HomeTelephone:String,
    Email:String,
    
    AddressLine1:{type:String,required:true},
    AddressLine2:String,
    
    PatientType:String,
    DeviceID:String
},
{
    timestamps: true
});
module.exports=mongoose.model('Patient',PatientSchema);