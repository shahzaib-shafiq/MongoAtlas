const express = require("express");
const app = express();
const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');

dbConnect();

const newUser = new User({
    email: "john@gmail.com",
    password: "Pass@1236"
});

newUser.save().then(() => {
    console.log("New User Inserted Successfully");
}).catch((error) => {
    console.log('Error in Inserting user', error);
});

module.exports = app;
