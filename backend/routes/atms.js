const router = require('express').Router();
let ATM = require('../models/atmModel');

router.route('/').get((req,res)=>{
    ATM.find()
    .then(atms => res.json(atms))
    .catch(err => res.status(400).json('Error' +err));
})

router.route('/add').post((req,res)=>{

    const name = req.body.name;
    const city = req.body.city;
    const address = req.body.address;


    const newATM = new ATM({ name,city,address},process.env.ATLAS_URI); 

    newATM.save()
    .then(() => res.json('ATM added!'))
    .catch(err => res.status(400).json('Error ATM added'));
});

router.route('/:id').get((req,res)=>{
    ATM.findById(req.params.id)
    .then(student=>res.json(student))
    .catch(err=>res.status(400).json('Error'));
})



module.exports = router;