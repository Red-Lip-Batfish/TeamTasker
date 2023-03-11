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

router.post('/createList', controller.createList, (req, res) => {
    res.status(200).json(res.locals._id); // tell them to store this id in list component
});

router.post('/createTask', controller.createAndAddTask, (req, res) => {
    res.status(200).json('task created');
});

// router.post('/addTask', controller.addTask, (req, res) => {
//     res.status(200).json('task added');
// });


module.exports = router;