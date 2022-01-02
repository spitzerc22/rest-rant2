const express = require('express')
const router = express.Router()
const db = require('../models/mongoose')

//FOR POST ROUTE
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})

//ROUTES   
router.get('/', (req, res) => {
    // res.render('Index', {places})
    db.Place.find()
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
  res.render('New')
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
  db.Place.findById(req.params.id)
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

  // if (!req.body.city) {
  //   req.body.city = 'Anytown'
  // }
  // if (!req.body.state) {
  //   req.body.state = 'USA'
  // }
  // places.push(req.body)
  // res.redirect('/places')
  db.Place.create(req.body)
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
//  db.Place.findById(req.params.id)
//   .then(foundPlace => {
//     res.render('Edit', {
//       place: foundPlace
//     })
//   })
    res.send('GET edit form stub')
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
  res.send('PUT /places/:id stub')
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
  res.send('DELETE /places/:id stub')
})
module.exports = router