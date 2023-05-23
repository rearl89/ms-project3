const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'This is a journaling app' })
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 5001')
})