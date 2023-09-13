const router = require('express').Router();
let Student = require('../models/studentModel');

router.route('/').get((req,res)=>{
    Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error' +err));
})

router.route('/add').post((req,res)=>{

    const name = req.body.name;
    const city = req.body.city;
    const address = req.body.isAdmin;


    const newATM = new ATM({ name, city,address},process.env.ATLAS_URI); 

    newATM.save()
    .then(() => res.json('A added!'))
    .catch(err => res.status(400).json('Error user added'));
});

router.route('/:id').get((req,res)=>{
    Student.findById(req.params.id)
    .then(student=>res.json(student))
    .catch(err=>res.status(400).json('Error'));
})

router.route('/:id').delete((req,res)=>{
    Student.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Student deleted succesfully!'))
    .catch(err=>res.status(400).json('Error delete user'));
})

router.route('/:id').put((req,res)=>{
    Student.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
    )
    .then(updated=>res.json(updated));
})

module.exports = router;