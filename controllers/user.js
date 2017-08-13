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

module.exports = router;