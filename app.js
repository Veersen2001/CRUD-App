const express = require('express');
require('dotenv').config();
// we can use import express from express

// talk to each url or database
const cors = require('cors');

const connectToDB = require('./config/db.js')

const app = express();

// Express middleware
// middleware : it uses before request as a check (point send database)
// accept json data
app.use(express.json())

// url encoding or decoding
app.use(express.urlencoded({extended:true}))

// we can send only valid url
app.use(cors())

// initilization of connection to database
connectToDB()

const userRoutes = require('./routes/userRoutes.js')


// when use al methods=>get,post
app.use('/',userRoutes);


module.exports = app;
// we can use export default app;

