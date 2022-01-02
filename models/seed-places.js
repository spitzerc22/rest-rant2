const Place = require('../models/places')

Place.create([{
    name: 'H-thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded:2020
}])

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})