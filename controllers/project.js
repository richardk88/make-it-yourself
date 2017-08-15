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

router.post("/newProject", (req, res) => {
    const newProject = new Project();
    newProject.name = req.body.name;
    newProject.image = req.body.image;
    newProject.materials = req.body.materials;
    newProject.description = req.body.description;
    
    newProject.save().then((project) => {
      res.json(project);
    }).catch(err => console.log(err));
  })

module.exports = router;