const mongoose = require("mongoose");

// mongoose.set('strictQuery',false);

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log("Mongo DB Connectionn Successfull");
})

db.on('error', () => {
    console.log("Mongo DB Connection failed");
})

module.exports = mongoose