const mongoose = require('mongoose')
const {Schema} = mongoose



const placeSchema = new Schema ({
   name: {type: String, required: true},
   pic: String,
   cuisines: {type: String, required: true},
   city: {type: String, default: 'Anytown'},
   state: {type: String, default: 'USA'},
   founded: Number
})

//Helper Method
placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

//EXPORT MODEL('Place' is collection, singular, uppercase use 'placeSchema' as guide)
const Place = mongoose.model('Place', placeSchema)

module.exports = Place

