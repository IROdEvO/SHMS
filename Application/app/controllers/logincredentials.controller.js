const LoginCredentials = require("../models/logincredentials.model.js");
const bcrypt = require("bcrypt");
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
                    message : "An error occured. Please check the logs"
                });
            }else{
                const newRecord = new LoginCredentials({
            
                    _id:req.body.NIC,
                    Username:req.body.Username,
                    Password:hashedPassword,
                    AccountType:req.body.AccountType
        
                    
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
    LoginCredentials.find((err,data)=>{
        if(err){
            res.status(500).send({
                message : "An error occured. Please check the console logs"
            });
            console.log(err);
        }else{
            res.send(data);
        }
    });
}
exports.findOne = (req,res) =>{
    LoginCredentials.findById(req.params.nic).then(data=>{
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
        var newRecord = {
            Username:req.body.Username,
            Password:req.body.Password,
            AccountType:req.body.AccountType
        }
        LoginCredentials.findByIdAndUpdate(req.params.nic,newRecord,{new:true},(err,data)=>{
            if(err){
                console.log(err);
                res.status(500).send({
                    message : "An error occured. Please check the console logs"
                });
            }else if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message : "No record was found"
                });
            }
        });
    }
}
exports.delete = (req,res) =>{
    LoginCredentials.findByIdAndDelete(req.params.nic,(err,data)=>{
        if(err){
            res.status(500).send({
                message : "An error occured. Please check the console logs"
            });
            console.log(err);
        }else if(data){
            res.send({
                message : "Record has been deleted"
            });
        }else{
            res.status(404).send({
                message : "Record is not found"
            });
        }
    });
};
exports.deleteAll = (req,res) =>{
    LoginCredentials.deleteMany((err,data)=>{
        if(err){
            res.status(500).send({
                message : "An error occured. Please check the console logs"
            });
            console.log(err);
        }else if(data){
            res.send({
                message : "All records have been deleted"
            });
        }
    });
}