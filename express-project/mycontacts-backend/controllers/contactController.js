// Contains all the logic for the controllers/requests to the server in one centralized
// file for simplicity
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

// Async handler to handler promises from MongoDB
const getContacts = asyncHandler(async (req, res) => {
    // response to server request in json format with status code
    res.status(200).json({message: "Get all contacts"});
});

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler( async (req, res) => {
    console.log("The request body is :", req.body);
    // Adding error handling
    const {name, email, phone} = req.body
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({message: "Create Contact"});
});

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

//@desc Update contact with id
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

//@desc Delete contact with id
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});

// Export all methods

module.exports = { 
    getContacts, 
    createContact, 
    updateContact, 
    getContact, 
    deleteContact ,
};

