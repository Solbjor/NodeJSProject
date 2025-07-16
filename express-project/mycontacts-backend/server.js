const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

// constant port connected
const port = process.env.PORT || 5000;

// Middleware

// Provides a parser to parse data stream from client requests
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

// listener
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});