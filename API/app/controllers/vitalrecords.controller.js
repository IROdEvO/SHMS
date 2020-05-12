const VitalRecord = require("../models/vitalrecords.model.js");
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        const newRecord = new VitalRecord({
            
            Temperature : req.body.Temperature,
            Pulse : req.body.Pulse,
            EmergencyButtonPressed : req.body.ButtonStatus,
            DeviceID : req.body.DeviceID
            
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

exports.findByDeviceID = (req,res) =>{
    VitalRecord.find({DeviceID:req.params.devid},(err,data)=>{
        if(err){
            res.send({
                message : err.message || "Err"
            });
            console.log(err);
        }else if(data.length){
            res.send(data);
        }else{
            res.status(404).send({
                message : `No record exists for device with device id ${req.params.devid}`
            });
            console.log(data);
        }
    });
};

exports.deleteAllByDeviceID = (req,res) =>{
    VitalRecord.deleteMany({DeviceID:req.params.devid},(err,data)=>{
        if(err){
            res.status(500).send({
                message : "Error occured. Check console logs"
            });
            console.log(err);
        }else{
            res.send({
                message : "All records of device"+req.params.devid+" were deleted successfully"
            });
        }
    });
};