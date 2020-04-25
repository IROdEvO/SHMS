const MedicalRecord = require("../models/medicalrecords.model.js");
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        const newRecord = new MedicalRecord({
            
            Condition:req.body.Condition,
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
exports.findByPatientNIC = (req,res) =>{
    MedicalRecord.find({BelongingPatientNIC:req.params.nic},(err,data)=>{
        if(err){
            res.send({
                message : err.message || "Err"
            });
            console.log(err);
        }else if(data.length){
            res.send(data);
        }else{
            res.status(404).send({
                message : `No record exists for patient with the nic ${req.params.nic}`
            });
            console.log(data);
        }
    });
};

exports.findByDoctorNIC = (req,res) =>{
    MedicalRecord.find({AssignedDoctorNIC:req.params.nic},(err,data)=>{
        if(err){
            res.send({
                message : err.message || "Err"
            });
            console.log(err);
        }else if(data.length){
            res.send(data);
            console.log(data);
            
        }else{
            res.status(404).send({
                message : `No record exists for doctor with the nic ${req.params.nic}`
            });
            console.log(data);
        }
    });
};

exports.findBy_id = (req,res) =>{
    MedicalRecord.findById(req.params._id,(err,data)=>{
        if(err){
            res.send({message:"Invalid Id. Please check error logs"});
            console.log(err);
        }else if(data){
            res.send(data);
            console.log(data);
        }else{
            res.status(404).send({
                message : `No record available for id ${req.params._id}`
            });
        }
    });
};

exports.updateBy_id = (req,res) =>{
    if(!req.body){
        return res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        var newRecord = {
            Condition:req.body.Condition,
            BelongingPatientNIC:req.body.BelongingPatientNIC,
            AssignedDoctorNIC:req.body.AssignedDoctorNIC,
            DiagnosedDate:req.body.DiagnosedDate,
            RecoveryStatus:req.body.RecoveryStatus,
            RecoveredDate:req.body.RecoveredDate,
            Details:req.body.Details
        }
        MedicalRecord.findByIdAndUpdate(req.params._id,newRecord,{new:true},(err,data)=>{
            if(err){
                res.status(500).send({
                    message : "Update failed due to error. See the error logs."
                });
                console.log(err);
            }else if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message : "No record found"
                });
            }
        });
    }
};


exports.deleteBy_id = (req,res) =>{
    MedicalRecord.findByIdAndDelete(req.params._id,(err,data)=>{
        if(err){
            res.status(500).send({
                message : "An error occured. Check the console logs"
            });
            console.log(err);
        }else if(data){
            res.send({
                message : "Deleted successfully"
            });
        }else{
            res.status(404).send({
                message : "No record was found to delete"
            });
        }
    });
};

exports.deleteAll = (req,res) =>{
    MedicalRecord.deleteMany((err,data)=>{
        if(err){
            res.status(500).send({
                message : "Error occured. Check console logs"
            });
            console.log(err);
        }else{
            res.send({
                message : "All records were deleted successfully"
            });
        }
    });
}