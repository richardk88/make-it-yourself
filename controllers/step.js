const express = require('express');
const User = require('../models/user');
const Step = require('../models/step');
const router = express.Router({
    mergeParams: true
});
const mongoose = require('mongoose');

//show route
router.get('/steps/:stepId', (req, res) => {
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

//create route
router.post('/newStep', (req, res) => {
    const newStep = new Step();
    newStep.name = req.body.name;
    newStep.image = req.body.image;
    newStep.description = req.body.description;

    User.findById(req.params.userId).then((user) => {
        const foundProject = user.projects.find((project) => {
            return project.id === req.params.projectId
        })

        foundProject.steps.push(newStep);
        user.save();
        res.send(200);
    }).catch(err => console.log(err))
})

module.exports = router;