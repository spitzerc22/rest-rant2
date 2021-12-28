const express = require('express')
const places = express.Router()

//ROUTES   
places.get('/', (req, res) => {
    res.send('I am the second page')
})

module.exports = places