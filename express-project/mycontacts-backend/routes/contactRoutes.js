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

router.route('/').get(getContacts).post(createContact);

// Creates new contact
// router.route('/').post(createContact); commented out to save space and simplify.

// Gets individual contact id, update contact, and delete. They all have the same route /:id so we can stack
// them to simplify
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

// Updates contact id
// router.route('/:id').put(updateContact);

// Deletes contact for id
// router.route('/:id').delete(deleteContact);


module.exports = router;