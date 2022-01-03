const express = require('express')
const router = express.Router()
const db = require('../models/mongoose')

//FOR POST ROUTE
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})

//ROUTES   
//INDEX
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
  .populate('comments')
    .then(place => {
      console.log(place.comments)
      res.render('Show', {place})
    })
    .catch(err => {
      console.log(err)
      res.render('Error')
    })
})

//CREATE COMMENT
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          console.log(err)
          res.render('Error')
      })
  })
  .catch(err => {
      console.log(err)
      res.render('Error')
  })
})

//CREATE BREAD
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
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      console.log(err)
      res.render('Error')
  })
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
    db.Place.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log(err)
          res.render('Error')
      })
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
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log(err)
        res.render('Error')
    })
})

module.exports = router