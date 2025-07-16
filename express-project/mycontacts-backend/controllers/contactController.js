// Contains all the logic for the controllers/requests to the server in one centralized
// file for simplicity


//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    // response to server request in json format with status code
    res.status(200).json({message: "Get all contacts"});
};

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    res.status(201).json({message: "Create Contact"});
};

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@desc Update contact with id
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
};

//@desc Delete contact with id
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
};

// Export all methods

module.exports = { 
    getContacts, 
    createContact, 
    updateContact, 
    getContact, 
    deleteContact ,
};

