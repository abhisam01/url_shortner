const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongodb);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('db is connected');
});

module.exports = db;
