const express = require('express');
const Project = require('../models/project');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

// router.get('/', (req, res) => {
//     User.findById(req.params.userId).then((user) => {
//         const foundProject = user.projects.find((project) => {
//             return project.id === req.params.projectId
//         })
//         res.json(foundProject);
//     })
// })

module.exports = router;