const Note = require("../models/note.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        return res.status(400).send({
            message : "Note cannot be empty"
        });
    }else{
        const note = new Note({
            nic:req.body.nic,
            title : req.body.title || "Untitled Note",
            content : req.body.content
        });

        note.save().then(data => {
            res.send(data);
        }).catch(err=>{
            res.status(500).send({
                message : err.message || "Error"
            });
        });
    }
};

exports.findAll = (req,res) =>{
    Note.find().then(notes=>{
        res.send(notes);
    }).catch(err=>{
        res.status(500).send({
            message : "Error"
        });
    });
};

exports.findByNIC = (req,res) =>{
    Note.find({nic:req.params.nic},(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error"
            });
        }else if(data.length){
            res.send(data);
        }else{
            res.status(404).send({
                message : `No record found for nic ${req.params.nic}`
            });
        }
    });
};

exports.findById = (req,res) =>{
    Note.find({_id:req.params.noteId},(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error"
            });
        }else if(data.length){
            res.send(data);
        }else{
            res.status(404).send({
                message : `No record found for id ${req.params.noteId}`
            });
        }
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    
    Note.findByIdAndUpdate(req.params.noteId, {
        nic:req.body.nic,
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

exports.delete = (req,res) =>{
    Note.remove({})
};



