const express = require('express');
const User = require('../models/user')
const router = express.Router({
    mergeParams: true
});
const mongoose = require('mongoose');

//show route
router.get('/:stepId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const foundProject = user.projects.find((project) => {
            return project.id === req.params.projectId
        })
        const foundStep = foundProject.steps.find((step) => {
            return step.id === req.params.stepId
        })
        res.json(foundStep);
    })
})

module.exports = router;