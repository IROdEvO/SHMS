const mongoose = require("mongoose");
const NoteSchema = mongoose.Schema({
    nic:String,
    title : String,
    content : String
},
{
    timestamps: true
});
module.exports=mongoose.model('Note',NoteSchema);