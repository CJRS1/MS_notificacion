const express = require('express')
const route = express.Router()
const controller = require('../controller/email.controller')

route
    .post('/email', controller.sendEmail)
    .post('/email-massive', controller.sendEmailMassive)

module.exports = route