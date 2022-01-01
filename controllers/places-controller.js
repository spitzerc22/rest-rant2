const express = require('express')
const places = express.Router()
var bodyParser = require('body-parser')


//ROUTES   
places.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/catLatte.jpg'
      }]
    res.render('Index', {places})
})

places.get('/new', (req, res) => {
  res.render('New')
})

places.get('/:id', (req, res) => {
  res.send()
})

places.post('/', (req, res) => {
  console.log(req.body)
  res.render('Index')
})

module.exports = places