const mongoose = require("mongoose");

//copy from CONNECT (MongoDB Atlas)
const dbURI = "mongodb+srv://web_info_admin:8LJ8T6768EGWzOR8@cluster0-rbkar.gcp.mongodb.net/test?retryWrites=true";

const options = {
    useNewUrlParser: true,
    dbName: "INFO30005"
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

require('./search.js');