const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')

const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})

const studentsRoutes = require('./routes/studentsRoutes')
const trainingRoutes = require('./routes/trainingRoutes')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'Olá express!'})
})

app.use('/', studentsRoutes)

app.use('/', trainingRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Conectado ao mongodb com sucesso')
})
.catch((error) => {
    console.log(error)
})

app.listen(process.env.PORT, () => {
    console.log(process.env.MONGO_URL)
})
