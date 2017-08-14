const express = require('express');
const Step = require('../models/step');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/:stepId', (req, res) => {
    Step.findById(req.params.stepId).then((step) => {
        res.json(step);
    });
});

module.exports = router;