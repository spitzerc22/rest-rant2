const db = require('../models/mongoose')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix', 
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '',
    founded: 2020
}])

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})