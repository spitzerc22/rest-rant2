const React = require('react')
const Default = require('./layout/Default')

function Show (data) {
    return (
        <Default>
            <main>
                <h1>{data.place.name}</h1>
            </main>
            <div className="container">
                <span>
                    <img src={data.place.pic} alt={data.place.name} />
                </span>
                <span>
                    <div>
                        <h3>Rating</h3>
                        <p>Not Rated</p>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>Located in {data.place.city}, {data.place.state}</p>
                        <p>With a {data.place.cuisines} style!</p>
                    </div>
                </span>
                <div>
                    <h3>Comments</h3>
                    <p>No comments yet!</p>
                </div>
            </div>
            <a href={`/places/${data.i}/edit`} className="btn btn-warning">Edit</a>
            <form method='POST' action={`/places/${data.i}?_method=DELETE`}>
                <button type='submit' className="btn btn-danger">
                    Delete
                </button>
            </form>

        </Default>
    )
}

module.exports = Show