const express = require('express')
const app = express()
const router = express.Router()
const admin = require('../helper/Admin')
const { route } = require('./registration_route')
const { jwt_token_validatotion } = require('../middleware/jwt_token')


router.get('/',jwt_token_validatotion,admin.getdata)

module.exports = router