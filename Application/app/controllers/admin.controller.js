const Admin = require("../models/admin.model.js");
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        const newRecord = new Admin({
            _id:req.body.NIC,
            FirstName:req.body.FirstName,
            MiddleName:req.body.MiddleName||"Not Available",
            Surname:req.body.Surname,
        
            DOB:req.body.DOB,
            
            MobilePhone:req.body.MobilePhone||"Not Available",
            HomeTelephone:req.body.HomeTelephone||"Not Available",
            
            Email:req.body.Email||"Not Available",
            
            AddressLine1:req.body.AddressLine1,
            AddressLine2:req.body.AddressLine2||"Not Available"
            
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
    Admin.find((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error",
            });
        }else{
            res.send(data);
        }
    });
}
exports.findOne = (req,res) =>{
    Admin.findById(req.params.nic).then(data=>{
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
                AddressLine2:req.body.AddressLine2||"Not Available"
                
            };
        
        Admin.findByIdAndUpdate(req.params.nic,newRecord,{new:true}).then(data=>{
            if(!data){
               return res.status(404).send({
                    message : "Record not found"
                });
            }else{
                res.send(data);
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
    }
}
exports.delete = (req,res) =>{
    Admin.findByIdAndDelete(req.params.nic).then(data=>{
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
    Admin.deleteMany({},(err,data)=>{
        if(err){return res.status(500).send({
            message : err.message || "Error"
        });}else{
            res.send({message:"Deleted all records"});
        }
    })
}