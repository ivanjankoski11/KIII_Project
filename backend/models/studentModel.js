const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
    },
    subjects:{
        type:Array,
    }
},{
    timestamps:true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;