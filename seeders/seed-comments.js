const db = require('../models/mongoose')


async function seed() {
    //grab your place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // create comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // add comment to place schema (comments array)
    place.comments.push(comment.id)
    //solution from Jamie? haven't seen it in action
    await place.save()
    // Exit the program
    process.exit()
}

seed()