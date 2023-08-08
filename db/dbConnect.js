const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Successfully Connected to Mongo Atlas');
    }).catch((error) => { // Fix the parentheses here
        console.log('Cannot Connect to Mongo Atlas');
        console.log(error);
    });
}
