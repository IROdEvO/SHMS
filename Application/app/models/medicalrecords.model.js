const mongoose = require("mongoose");
const MedRecordsSchema = mongoose.Schema({
    
    Condition:{type:String,required:true},
    BelongingPatientNIC:{type:String,required:true,index:true},
    AssignedDoctorNIC:{type:String,required:true,index:true},
    DiagnosedDate:Date,
    RecoveryStatus:String,
    RecoveredDate:Date,
    Details:String
},
{
    timestamps: true
});
module.exports=mongoose.model('MedRecord',MedRecordsSchema);