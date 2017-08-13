const express = require('express');
const User = require('../models/user');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

router.post('/email/:emailId', (req, res) => {
    const userEmail = req.body.email;
    User.findOne({"email": userEmail}).then((user) => {
        res.json(user);
    })
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    })
})

module.exports = router;