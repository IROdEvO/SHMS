const Patient = require("../models/patient.model.js");
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        const newRecord = new Doctor({
            _id:req.body.NIC,
            FirstName:req.body.FirstName,
            MiddleName:req.body.MiddleName||"Not Available",
            Surname:req.body.Surname,
        
            DOB:req.body.DOB,
            
            MobilePhone:req.body.MobilePhone||"Not Available",
            HomeTelephone:req.body.HomeTelephone||"Not Available",
            
            Email:req.body.Email||"Not Available",
            
            AddressLine1:req.body.AddressLine1,
            AddressLine2:req.body.AddressLine2||"Not Available",

            PatientType:req.body.Username,
            DeviceID:req.body.DeviceID

            
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
    Patient.find((err,data)=>{
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