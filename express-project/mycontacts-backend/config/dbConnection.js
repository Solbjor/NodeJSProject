const mongoose = require("mongoose");

// We create a function that establishes the connection with the DB, it uses mongoose to perform it
// and the MongoDB connect string
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database connected: ", 
            connect.connection.host, 
            connect.connection.name
        );
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;