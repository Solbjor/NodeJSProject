// Mongoose object to store information

const mongoose = require("mongoose");
 
// Has values/fields for our contact object 
const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add the contact name"],
        },
        email: {
            type: String,
            required: [true, "Please add the contact email address"],
        },
        phone: {
            type: String,
            required: [true, "Please add the contact phone number"],
        },  
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);