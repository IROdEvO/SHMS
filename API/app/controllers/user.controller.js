const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const json = require("json");
const jwt = require("jsonwebtoken");
const SECRET = 'Smart_Health_Monitoring_System';
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
                    MiddleName:req.body.MiddleName||'',
                    Surname:req.body.Surname,
                
                    DOB:req.body.DOB,
                    
                    MobilePhone:req.body.MobilePhone||"Not Available",
                    HomeTelephone:req.body.HomeTelephone||"Not Available",
                    
                    Email:req.body.Email||"Not Available",
                    
                    AddressLine1:req.body.AddressLine1,
                    AddressLine2:req.body.AddressLine2,
        
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
                message : "No records found"
            });
        }
    });
};
exports.findAllByAccountType = (req,res)=>{
    
    User.find({AccountType:req.params.accounttype},(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error"
            });
        }else if(data.length){
            res.send(data);
        }else{
            res.status(404).send({
                message : "No records found"
            })
        }
    });
};
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
exports.login = (req,res) => {
    User.find({NIC:req.body.NIC},(err,data)=>{
        if(err){
            res.status(500).send({message:'Error'});
            console.log(err);
        }else if(data.length){
            let passwordIsValid = bcrypt.compareSync(req.body.Password,data[0].Password);
            if(!passwordIsValid){
                res.status(401).send({
                    message:'Password invalid',
                    auth:false,     
                    token:null
                });
                console.log("data");
            }else{
                let token = jwt.sign({id:data[0].NIC,type:data[0].AccountType},SECRET,{expiresIn:86400});
                res.status(200).send({auth:true,token:token,user:data[0]});
                console.log(token);
            }
            
        }else{
            res.status(404).send({ 
                message:'No record found'
            })
            console.log('No Record Found');
        }
    });
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
                    MiddleName:req.body.MiddleName||'',
                    Surname:req.body.Surname,
                
                    DOB:req.body.DOB,
                    
                    MobilePhone:req.body.MobilePhone||"Not Available",
                    HomeTelephone:req.body.HomeTelephone||"Not Available",
                    
                    Email:req.body.Email||"Not Available",
                    
                    AddressLine1:req.body.AddressLine1,
                    AddressLine2:req.body.AddressLine2,
    
                    Hospital:req.body.Hospital,
                    Ward:req.body.Ward,   
                    PatientType:req.body.PatientType || "Not Applicable",
                    Password:hashedPassword,
                    DeviceID:req.body.DeviceID || "Not Applicable",
                    AccountType:req.body.AccountType,
                    AreaOfExpertise:req.body.AreaOfExpertise || "Not Applicable"
                    
                };
               User.updateOne({_id:req.params._id},newRecord,{new:true},(err,data)=>{
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