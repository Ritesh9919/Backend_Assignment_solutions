const mongoose = require("mongoose");


const technicianSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
}, {timestamps:true});


const Technician = mongoose.model('Technician', technicianSchema);
module.exports = Technician;