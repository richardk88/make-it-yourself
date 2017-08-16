const express = require('express');
const User = require('../models/user')
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
    // const newStep = new Step();
    // newStep.name = req.body.name;
    // newStep.image = req.body.image;
    // newStep.description = req.body.description;
    
    User.findById(req.params.userId).then((user) => {
        const foundProject = user.projects.find((project) => {
            return project.id === req.params.projectId
        })
        const foundStep = foundProject.steps.find((step) => {
            return step.id === req.params.stepId
        })
        // user.projects.push(newStep);
        // user.save();
    })

    newStep.save().then((project) => {
      res.json(project);
    }).catch(err => console.log(err));
  })


//   router.post('/:userId/add/:showId', (req,res)=>{
//     const userId = req.params.userId;
//     const showId = req.params.showId;
    
//     Show.findById(showId).then((show)=>{
//         const newShow = show;
//         res.send(200)
        
//         User.findById(userId).then((user)=>{
//         user.showsList.push(newShow);
//         user.save();
//         console.log(user);
        
        
//     }).catch((err)=>{
//         console.log(err)
//     })
//     }).catch((err)=>{
//         console.log(err)
//     });
    
// })

module.exports = router;