const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const routeEmail = require('./router/email.router')
const routeIndex = require('./router/index.router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false})) 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

dotenv.config()

app.use(routeEmail)
app.use(routeIndex)

module.exports = app