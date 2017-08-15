const express = require('express');
const User = require('../models/user');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        res.json(user);
    })
})

router.get('/:userId/delete', (req, res) => {
    const userIdToDelete = req.params.userId;
    User.findByIdAndRemove(userIdToDelete).then((user) => {
        console.log(`${user.userName} was deleted`);
        // res.redirect('/');
    }).catch(err => console.log(err));
});

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

  router.put('/:userId', (req,res) => {
    User.findByIdAndUpdate(req.params.id).then((user)=>{
        user.userName = req.body.userName;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.blurb = req.body.blurb;
        
        user.save();      
    }).catch(err => console.log(err))
})

module.exports = router;