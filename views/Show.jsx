const React = require('react')
const Default = require('./layout/Default')

function Show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated!
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((total, comment) => {
            return total + comment.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map(comment => {
            return (
                <div className="border">
                    <h2 className="rant">
                        {comment.rant ? 'Rant! >:(' : 'Rave! :D'}
                    </h2>
                    <h4>{comment.content}</h4>
                    <h3>
                        <strong>- {comment.author}</strong>
                    </h3>
                    <h4>Rating: {comment.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Default>
            <main>
                <h1>{data.place.name}</h1>
            </main>
            <div className="container">
                <div>
                    <img src={data.place.pic} alt={data.place.name} />
                    <p>Located in {data.place.city}, {data.place.state}</p>
                </div>
                <div>
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h3>Serving {data.place.cuisines}</h3>
                
                </div>
               
                <div>
                    <h3>Rating</h3>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h3>Comments</h3>
                    {comments}
                </div>
            </div>
            <form action={`/places/${data.place.id}/comment`} method='POST'>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" />
                    <label htmlFor="content">Content</label>
                    <input type="textarea" id="content" name="content" />
                    <label htmlFor="starRating">Star Rating</label>
                    <input type="number" id="starRating" name="starRating" step="0.5" min="0" max="5"/>
                    <label htmlFor="rant">Rant</label>
                    <input type="checkbox" id="rant" name="rant" />
                    < br/>
                    <input className="btn btn-primary" type="submit" value="Add Comment"/>
                </form>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className="btn btn-danger">
                    Delete
                </button>
            </form>

        </Default>
    )
}

module.exports = Show