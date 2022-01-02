//DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//MIDDLEWARE    
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//allows us to access public folder
app.use(express.static("public"))
//returns request as strings/arrays
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places-controller'))

// CONNECTING DB    
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopolgy: true}, () => {console.log('Connected to DB')})

//ROUTES
app.get('/', (req, res) => {
    res.render('Home')
})

//404 ERROR
app.get('*', (req, res) => {
    res.render('Error')
})



//LISTEN   
app.listen(process.env.PORT)