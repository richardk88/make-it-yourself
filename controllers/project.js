const express = require('express');
const User = require('../models/user');
const router = express.Router({
    mergeParams: true
});
const mongoose = require('mongoose');

router.get('/:projectId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const foundProject = user.projects.find((project) => {
            return project.id === req.params.projectId
        })
        res.json(foundProject);
    })
})

module.exports = router;