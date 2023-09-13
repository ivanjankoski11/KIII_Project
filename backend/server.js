const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer')
const path = require('path')


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true} );

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to DataBase");
})

const studentsRouter = require('./routes/students');
const authRouter = require('./routes/auth');
const newsRouter = require('./routes/vest');
const atmRouter = require('./routes/atms')


//Middlewares
app.use(cookieParser());
app.use('/students',studentsRouter);
app.use('/auth',authRouter);
app.use('/vesti',newsRouter);
app.use('/uploads',express.static(__dirname+"/uploads"))
app.use('/atms',atmRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT, () => {
    console.log(`Server is running on this port: ${PORT} "`);
})
