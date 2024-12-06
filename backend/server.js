const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoURI = "mongodb://localhost/loginData";

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
    console.log("Connected to MongoDB");
});

app.listen(9000, (err) => {
    if (!err) {
        console.log("Server is running on port 9000");
    } else {
        console.log(`Error ${err}`);
    }
});
