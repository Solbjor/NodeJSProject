// File to handle all routing for the express server

const express = require("express");

// contains all routing methods
const router = express.Router();

router.route('/').get((req, res) => {
    // response to server request in json format with status code
    res.status(200).json({message: "Get all contacts"});
});

// Creates new contact
router.route('/').post((req, res) => {
    res.status(200).json({message: "Create Contact"});
});

// Gets individual contact id
router.route('/:id').get((req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

// Updates contact id
router.route('/:id').put((req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

// Deletes contact for id
router.route('/:id').delete((req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});


module.exports = router;