const mongoose = require("mongoose");
const VitalRecordsSchema = mongoose.Schema({
    
    Temperature : {type:String},
    Pulse : {type : String},
    EmergencyButtonPressed : {type : String},
    DeviceID : {type:String,index:true}
},
{
    timestamps: true
});
module.exports=mongoose.model('VitalRecord',VitalRecordsSchema);