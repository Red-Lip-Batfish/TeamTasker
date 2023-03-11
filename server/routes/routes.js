const express = require('express');
const controller = require('../controllers/controller.js');
const router = express.Router();

router.use(express.json());


router.post('/login', controller.login, (req, res) => {
    res.status(200).json(res.locals.people);
});

router.post('/signup', controller.isUnique, controller.signup, (req, res) => {
    res.status(200).json('signup successful');
});


module.exports = router;