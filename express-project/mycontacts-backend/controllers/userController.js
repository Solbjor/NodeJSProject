const asyncHandler = require("express-async-handler");

//@desc register a user
//@route POST /api/users/register
//@access public

// Async handler to handler user registration
const registerUser = asyncHandler(async (req, res) =>{
    res.json({message: "Register the user"});
});

//@desc login a user
//@route POST /api/users/login
//@access public

// Async handler to handler user registration
const loginUser = asyncHandler(async (req, res) =>{
    res.json({message: "Login user"});
});

//@desc current user
//@route POST /api/users/current
//@access private

// Async handler to handler user info privately
const currentUser = asyncHandler(async (req, res) =>{
    res.json({message: "Current user information"});
});

module.exports = {registerUser, loginUser, currentUser}