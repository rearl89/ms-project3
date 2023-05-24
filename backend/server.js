const express = require('express')
const mongoose = require('mongoose')
const entryRoutes = require('./routes/entries')
require('dotenv').config()
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/entries', entryRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on port 5001')
    }) 
})
.catch((error) => {
    console.log(error)
})

