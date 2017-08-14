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

router.get('/:userId/:projectId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const foundProject = user.projects.find((project) => {
            return project.id === req.params.projectId
        })
        res.json(foundProject);
    })
})

module.exports = router;