const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('./routes')
const error = require('./middlewares/error')
require('./firebase/init-app')
require('dotenv').config()

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(error)
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log('Server on port 3001' + process.env.PORT)
})
