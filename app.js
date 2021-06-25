require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT ||8000;
// mongo db connection
// process.env.database

const connectdb = require('./connection');
connectdb();


app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`)
})
