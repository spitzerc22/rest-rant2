const React = require('react')
const Default = require('./layout/Default')

function Show (data) {
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
                    <h3>{data.Place.showEstablished()}</h3>
                    <h3>Serving {data.Place.cuisines}</h3>
                
                </div>
                <div>
                    <h3>Rating</h3>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h3>Comments</h3>
                    <p>No comments yet!</p>
                </div>
            </div>
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