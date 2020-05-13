const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const json = require("json");
exports.create = (req,res) =>{
    
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        bcrypt.hash(req.body.Password,10,(err,hashedPassword)=>{
            if(err){
                console.log(err);
                res.status(500).send({
                    message : err.message || "Error Hashing Password"
                });
            }else{
                const newRecord = new User({
                    NIC:req.body.NIC,
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
                    Ward:req.body.Ward||"Not Applicable",  
                    PatientType:req.body.PatientType,
                    DeviceID:req.body.DeviceID,
                    AccountType:req.body.AccountType,
                    Password:hashedPassword, 
            
                    AreaOfExpertise:req.body.AreaOfExpertise||"Not Applicable"    
                });
                newRecord.save().then(data => {
                    res.send(data);
                }).catch(err=>{
                    res.status(500).send({
                        message : err.message || "Error"
                    });
                });
            }
        });
    }
};
exports.findAll = (req,res) =>{
    User.find((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error"
            });
        }else if(data.length){
            res.send(data);
        }else{
            res.send({
                message : "No data exists"
            });
        }
    });
}
exports.findOne = (req,res) =>{
    User.find({NIC:req.params.nic},(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message ||"Error"
            });
        }else if(data.length){
            res.send(data);
        }else{
            res.send({message:"Record not found"});
        }
    })
};
exports.update = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        bcrypt.hash(req.body.Password,10,(err,hashedPassword)=>{
            if(err){
                console.log(err);
                res.status(500).send({
                    message : err.message || "Error Hashing Password"
                });
            }else{
                const newRecord = 
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
                    Password:hashedPassword,
                    DeviceID:req.body.DeviceID,
                    AccountType:req.body.AccountType,
                    AreaOfExpertise:req.body.AreaOfExpertise
                    
                };
               User.updateOne({NIC:req.params.nic},newRecord,{new:true},(err,data)=>{
                    if(err){
                        res.status(500).send({
                            message : err.message || "Error"
                        });
                        console.log(err);
                    }else if(data.n === 1){
                        console.log("Updated");
                        res.send({message:"Updated"});
                    }else{
                        console.log("Record not found");
                        res.send({message:"Record not found"});
                    }
               });
            }
        });
       
    }
}
/*exports.delete = (req,res) =>{
    User.findByIdAndDelete(req.params.nic).then(data=>{
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
};*/
exports.delete=(req,res)=>{
    User.deleteOne({NIC:req.params.nic},(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error"
            });
        }else if(data.n === 1){
            res.send({
                message : `Record under NIC ${req.params.nic} was successfully deleted`
            });
        }else{
            res.send({
                message : `No record was found for NIC ${req.params.nic}`
            })
        }
    });
}
exports.deleteAll = (req,res) =>{
    User.deleteMany({},(err,data)=>{
        if(err){return res.status(500).send({
            message : err.message || "Error"
        });}else{
            res.send({message:"Deleted all records"});
        }
    })
}