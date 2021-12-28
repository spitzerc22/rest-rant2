//DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()


app.use('/places', require('./controllers/places'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

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