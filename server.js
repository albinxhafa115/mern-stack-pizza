const express = require("express");

const Pizza = require('./models/pizzaModel')

const db = require("./db.js")

const app = express(); 

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')
const offersRoute =require ('./routes/offersRoute')
const csoonpizzasRoute = require('./routes/csoonpizzasRoute')
app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)
app.use('/api/offers/' , offersRoute)
app.use('/api/csoonpizzas/' , csoonpizzasRoute)
app.get("/", (req, res) => {
    res.send("Server working " + port);
});



const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port port ');