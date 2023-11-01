const mongoose = require("mongoose");


const actorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
}, {timestamps:true});


const Actor = mongoose.model('Actor', actorSchema);
module.exports = Actor;