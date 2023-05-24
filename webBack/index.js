const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')


const authRouter = require('./routes/authRouter.js')



app.use(express.json())

app.use('/api/auth', authRouter);






mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {

    console.log('connection to mongodb');
    app.listen(process.env.PORT, (err) => {
        err ? console.log(err) : console.log('Server is listening');;
    })
})