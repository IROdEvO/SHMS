const LoginCredentials = require("../models/logincredentials.model.js");
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        const newRecord = new MedicalRecord({
            
            BelongingPatientNIC:req.body.BelongingPatientNIC,
            AssignedDoctorNIC:req.body.AssignedDoctorNIC,
            DiagnosedDate:req.body.DiagnosedDate,
            RecoveryStatus:req.body.RecoveryStatus,
            RecoveredDate:req.body.RecoveredData,
            Details:req.body.Details
            
        });
        newRecord.save().then(data => {
            res.send(data);
        }).catch(err=>{
            res.status(500).send({
                message : err.message || "Error"
            });
        });
    }
};
exports.findAll = (req,res) =>{
    MedicalRecord.find((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error"
            });
        }else{
            res.send(data);
        }
    });
}
exports.findOne = (req,res) =>{

};
exports.update = (req,res) =>{
    
}
exports.delete = (req,res) =>{

};
exports.deleteAll = (req,res) =>{
    
}