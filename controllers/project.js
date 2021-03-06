const express = require('express');
const User = require('../models/user');
const Project = require('../models/project')
const router = express.Router({
    mergeParams: true
});
const mongoose = require('mongoose');


//show route
router.get('/project/:projectId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const foundProject = user.projects.find((project) => {
            return project.id === req.params.projectId
        })
        res.json(foundProject);
    }).catch(err => console.log(err));
})

//create route
router.post('/newProject', (req, res) => {
    const newProject = new Project();
    newProject.name = req.body.name;
    newProject.image = req.body.image;
    newProject.materials = req.body.materials;
    newProject.description = req.body.description;
    
    User.findById(req.params.userId).then((user) => {
        user.projects.push(newProject);
        user.save();
    })

    newProject.save().then((project) => {
      res.json(project);
    }).catch(err => console.log(err));
  })

//delete route
router.delete(`/project/:projectId`, (req, res) => {
    User.findById(req.params.userId).then( user => {
        const Index = user.projects.findIndex((project) => {
            return project.id === req.params.projectId
    })
    user.projects.splice(Index, 1);
    user.save()
    res.send(200);
}).catch(err => console.log(err))
})



module.exports = router;