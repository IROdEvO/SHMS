const Patient = require("../models/patient.model.js");
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        const newRecord = new Patient({
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

                Hospital:req.body.Hospital,
                Ward:req.body.Ward,   
                PatientType:req.body.PatientType,
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
    Patient.findById(req.params.nic).then(data=>{
        if(!data){
            return res.status(404).send({
                message : "Record not found"
            });
        }else{
            return res.send(data);
        }
    }).catch(err=>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message : "Record not found"
            });
        }else{
            return res.status(500).send({
                message : err.message || "Error"
            });
        }
    });
};
exports.update = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        var newRecord = 
            {
                FirstName:req.body.FirstName,
                MiddleName:req.body.MiddleName||"Not Available",
                Surname:req.body.Surname,
            
                DOB:req.body.DOB,
                
                MobilePhone:req.body.MobilePhone||"Not Available",
                HomeTelephone:req.body.HomeTelephone||"Not Available",
                
                Email:req.body.Email||"Not Available",
                
                AddressLine1:req.body.AddressLine1,
                AddressLine2:req.body.AddressLine2||"Not Available",
    
                Hospital:req.body.Hospital,
                Ward:req.body.Ward,   
                PatientType:req.body.PatientType,
                DeviceID:req.body.DeviceID
                
            };
        
        Patient.findByIdAndUpdate(req.params.nic,newRecord,{new:true},(err,data)=>{
            if(err){
                console.log(err);
                res.status(500).send({
                    message : "An error occured. Please see the console logs"
                });
            }else if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message : "Record does not exist"
                });
            }
        });
    }
};
exports.delete = (req,res) =>{
    Patient.findByIdAndDelete(req.params.nic).then(data=>{
        if(!data){
            return res.status(404).send({
                message : "Record not found"
            });
        }else{
            return res.send({
                message : "Record deleted"
            });
        }
    }).catch(err=>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message : "Record not found"
            });
        }else{
            return res.status(500).send({
                message : err.message || "Error"
            });
        }
    });
};
exports.deleteAll = (req,res) =>{
    Patient.deleteMany({},(err,data)=>{
        if(err){return res.status(500).send({
            message : err.message || "Error"
        });
        console.log(err);
    }else{
            res.send({message:"Deleted all records"});
        }
    });
}