const mongoose = require("mongoose");

// mongoose.set('strictQuery',false);
var mongoURL = 'mongodb+srv://albin115:albin@cluster0.fuvhjkp.mongodb.net/mern-pizza'
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log("Mongo DB Connectionn Successfull");
})

db.on('error', () => {
    console.log("Mongo DB Connection failed");
})

module.exports = mongoose