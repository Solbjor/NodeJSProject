const express = require("express");
const errorHandler = require("./middleware/errorhandler");

const connectDb= require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

// constant port connected
const port = process.env.PORT || 5000;

// Middleware

// Provides a parser to parse data stream from client requests
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

// listener
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});