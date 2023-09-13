const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vestSchema = new Schema({
    naslov:{
        type:String,
        required:true,
        trim:true
    },
    tekst:{
        type:String,
        required:true,
        trim:true
    },
    vestImg:{
        type:String,
        required:false
    }
},{
    timestamps:true,
});

const Vest = mongoose.model('Vest', vestSchema);

module.exports = Vest;