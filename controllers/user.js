const express = require('express');
const User = require('../models/user');
const router = express.Router();
const mongoose = require('mongoose');

//index route
router.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

//show route (Dashboard)
router.get('/:userId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        res.json(user);
    })
})

//delete route
router.get('/:userId/delete', (req, res) => {
    const userIdToDelete = req.params.userId;
    User.findByIdAndRemove(userIdToDelete).then((user) => {
        console.log(`${user.userName} was deleted`);
        res.send(200)
    }).catch(err => console.log(err));
});

//create route
router.post("/signUp", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const blurb = req.body.blurb;

    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.userName = userName;
    newUser.email = email;
    newUser.password = password;
    newUser.blurb = blurb;
    
    newUser.save().then((user) => {
      res.json(user);
    }).catch(err => console.log(err));
  })

//edit route
router.put('/:userId', (req,res) => {
    User.findByIdAndUpdate(req.body._id, req.body).then((user)=>{ 
        res.send(200);  
    }).catch(err => console.log(err))
})

module.exports = router;