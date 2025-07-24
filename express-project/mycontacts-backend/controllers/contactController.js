// Contains all the logic for the controllers/requests to the server in one centralized
// file for simplicity
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

// Async handler to handler promises from MongoDB
const getContacts = asyncHandler(async (req, res) => {
    // response to server request in json format with status code
    const contacts = await Contact.find();
    res.status(200).json({contacts});
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
    const contact = await Contact.create({
        name, 
        email,
        phone,
    })
    res.status(201).json(contact);
});

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Update contact with id
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    };
    // Updates contact with id, body and flagging it as true
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}  
    );
    res.status(200).json(updatedContact);
});

//@desc Delete contact with id
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    // Delete contact with id
    await contact.deleteOne(); // ✅ Correct way
    res.status(200).json(contact);
});

// Export all methods 

module.exports = { 
    getContacts, 
    createContact, 
    updateContact, 
    getContact, 
    deleteContact ,
};

