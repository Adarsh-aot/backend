const express = require('express')
const app = express()
const router = express.Router()
const order = require('../helper/order')
const { route } = require('./registration_route')
const { jwt_token_validatotion } = require('../middleware/jwt_token')


router.post('',jwt_token_validatotion,order.addorder)


module.exports = router