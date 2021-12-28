const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
    res.send('I am up and running!')
})

//404 ERROR
app.get('*', (req, res) => {
    res.status(404).send('Opps, there was something wrong!')
})

app.listen(process.env.PORT)