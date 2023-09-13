const router = require('express').Router();
let Admin = require('../models/adminModel');

router.route('/').get((req,res)=>{
    Admin.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json('Error' +err));
})

router.route('/add').post((req,res)=>{

    const username = req.body.username;
    const tekst = req.body.password;

    const newVest = new Vest({ naslov, tekst},process.env.ATLAS_URI); 

    newVest.save()
    .then(() => res.json('Vest added!'))
    .catch(err => res.status(400).json('Error vest added'));
});

module.exports = router;