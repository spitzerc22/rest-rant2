const mongoose = require('mongoose')
const {Schema} = mongoose


const commentSchema = new Schema ({
    author: {type: String, default: 'Anonymous'},
    rant: {type: Boolean, default: false},
    stars: {type: Number, required: true },
    content: {type: String, default: ''}
})

module.export = mongoose.model('Comment', commentSchema)