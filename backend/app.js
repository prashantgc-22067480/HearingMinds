const express = require("express");
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

require('./Models/db.js')
require('./Controller/AuthController.js')
const AuthRouter = require('./Routes/AuthRouter.js')
const UserRouter = require('./Routes/UserRouter.js')

const PORT = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(cors())

app.use('/api/auth', AuthRouter)
app.use('/api/user', UserRouter)

app.listen(PORT, () =>[
    console.log(`server is running on ${PORT}`)
])