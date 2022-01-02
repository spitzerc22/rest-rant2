const mongoose = require('mongoose')
const {Schema} = mongoose



const placeSchema = new Schema ({
   name: {type: String, required: true},
   pic: {type: String, default: 'http://placekitten.com/350/350'},
   cuisines: {type: String, required: true},
   city: {type: String, default: 'Anytown'},
   state: {type: String, default: 'USA'},
   founded: {
       type: Number,
       min: [1673],
       max: [new Date().getFullYear()]
   }
})

//Helper Method
placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

//EXPORT MODEL('Place' is collection, singular, uppercase use 'placeSchema' as guide)
module.exports = mongoose.model('Place', placeSchema)