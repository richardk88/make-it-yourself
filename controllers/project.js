const express = require('express');
const Project = require('../models/project');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    Project.find().then((projects) => {
        res.json(projects);
    });
});

router.get('/:projectId', (req, res) => {
    Project.findById(req.params.projectId).then((project) => {
        res.json(project);
    })
})

module.exports = router;