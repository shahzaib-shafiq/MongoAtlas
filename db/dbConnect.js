
const mongoose = require('mongoose');
// require('dotenv').config();

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/mydatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to the database');
    }).catch((error) => {
        console.error('Error connecting to the database:', error);
    });
};

module.exports = dbConnect;
