require('dotenv').config()
const express = require('express');
const db = require('./db/mongoose');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res)=> {
    res.send("Hello World");
})

app.listen(port, ()=> {
    console.log("Server is running on port:", port);
})