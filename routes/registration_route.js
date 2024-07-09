const express = require('express')
const app = express()
const router = express.Router()
const registration = require('../helper/registration')



router.post('/',registration.login)
router.post('/register',registration.register)

module.exports = router