const mongoose = require("mongoose");
const VitalRecordsSchema = mongoose.Schema({
    
    Temperature : {type:String},
    Pulse : {type : String},
    EmergencyButtonPressed : {type : String},
    DeviceID : {type:String,index:true},
    TempCondition : {type:String},
    Status : {type:String},
    Timestamp : {type:Date}
},
{
    timestamps: true
});
module.exports=mongoose.model('VitalRecord',VitalRecordsSchema);