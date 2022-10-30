const route = require('express').Router()
const User = require('./controllers/user')

route.post('/api/cadastro', User.create)
route.post('/api/login', User.login)

module.exports = route
