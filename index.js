//DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()

//MIDDLEWARE    
app.use('/places', require('./controllers/places'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//allows us to access public folder
app.use(express.static("public"))

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