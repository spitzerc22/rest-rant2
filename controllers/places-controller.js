const express = require('express')
const router = express.Router()
const Place = require('../models/places')

//FOR POST ROUTE
// const bodyParser = require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({extended: false})

//ROUTES   
router.get('/', (req, res) => {
    // res.render('Index', {places})
    Place.find()
      .then(places => {
        res.render('Index', {places})
        })
      .catch(err => {
        console.log(err)
        res.render('Error')
      })
})

//NEW
router.get('/new', (req, res) => {
  // res.render('New')
})

//SHOW
router.get('/:id', (req, res) => {
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //   res.render('Error')
  // } else if (!places[id]) {
  //   res.render('Error')
  // }
  // res.render('Show', {
  //   place: places[req.params.id], 
  //   id: req.params.id
  // })
  Place.findById(req.params.id)
    .then(place => {
      res.render('Show', {place})
    })
    .catch(err => {
      console.log(err)
      res.render('Error')
    })
})

//CREATE
router.post('/', (req, res) => {
  // const obj = JSON.parse(JSON.stringify(req.body))
  // console.log(obj)
  // if (!req.body.pic) {
  //   req.body.pic = 'http://placekitten.com/400/400'
  // }
  // if (!req.body.city) {
  //   req.body.city = 'Anytown'
  // }
  // if (!req.body.state) {
  //   req.body.state = 'USA'
  // }
  // places.push(req.body)
  // res.redirect('/places')
  Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log(err)
      res.render('Error')
    })
})

//EDIT
router.get('/:id/edit', (req, res) => {
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //   res.render('Error')
  // } else if (!places[id]) {
  //   res.render('Error')
  // }
  // res.render('Edit', {
  //   place: places[req.params.id],
  //   id: req.params.id
  // })
})

//UPDATE
router.put('/:id', (req, res) => {
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //     res.render('error404')
  // }
  // else if (!places[id]) {
  //     res.render('error404')
  // }
  // else {
  //     if (!req.body.pic) {
  //         req.body.pic = 'http://placekitten.com/400/400'
  //     }
  //     if (!req.body.city) {
  //         req.body.city = 'Anytown'
  //     }
  //     if (!req.body.state) {
  //         req.body.state = 'USA'
  //     }

  //     // Save the new data into places[id]
  //     places[id] = req.body
  //     res.redirect(`/places/${id}`)
  // }
})

//DELETE
router.delete('/:id', (req, res) => {
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //   res.render('Error')
  // } else if (!places[id]) {
  //   res.render('Error')
  // } else {
  //   places.splice(id, 1)
  //   res.redirect('/places')
  // }
})
module.exports = router