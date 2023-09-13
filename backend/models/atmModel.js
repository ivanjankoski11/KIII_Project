const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const atmSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true,
});

const ATM = mongoose.model('ATM', atmSchema);

module.exports = ATM;