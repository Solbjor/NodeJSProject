// File to handle all routing for the express server

const express = require("express");

// contains all routing methods
const router = express.Router();

// we import all the methods from the contact controller file
const {getContacts,
    createContact, 
    updateContact, 
    getContact, 
    deleteContact ,
} = require("../controllers/contactController");

router.route('/').get(getContacts);

// Creates new contact
router.route('/').post(createContact);

// Gets individual contact id
router.route('/:id').get(getContact);

// Updates contact id
router.route('/:id').put(updateContact);

// Deletes contact for id
router.route('/:id').delete(deleteContact);


module.exports = router;