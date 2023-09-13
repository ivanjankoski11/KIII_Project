const router = require('express').Router();
let Vest = require('../models/vestModel');
const multer = require('multer');
const fs = require('fs')


const upload = multer({dest:'uploads/'})



router.route('/:id').get((req,res)=>{

    Vest.findById(req.params.id,(error,data)=>{
        if(error){
            console.log('Error found')
        }
        else
        {
            res.json(data);
            console.log('Found')
        }
    })    
})

//GET ALL STUDENTS
router.route('/').get((req,res)=>{
    Vest.find()
    .then(vesti => res.json(vesti))
    .catch(err => res.status(400).json('Error' +err));
})

//ADD NEW VEST
router.post('/add',upload.single('vestImg') ,(req,res)=>{

    const naslov = req.body.naslov;
    const tekst = req.body.tekst;
    
    let fileType = req.file.mimetype.split('/')[1];
    const vestImg = req.file.filename+"."+fileType;
    fs.rename(`./uploads/${req.file.filename}`,`./uploads/${vestImg}`,function(){
    })

    const newVest = new Vest({ naslov, tekst, vestImg},process.env.ATLAS_URI); 

    newVest.save()
    .then(() => res.json('Vest added!'))
    .catch(err => res.status(400).json('Error vest added'));
});


//DELETE VEST
router.route('/del/:id').delete((req,res)=>{
    Vest.findByIdAndDelete(req.params.id)
    .then(()=>res.json('News deleted succesfully!'))
    .catch(err=>res.status(400).json('Error delete news'));
})

module.exports = router;