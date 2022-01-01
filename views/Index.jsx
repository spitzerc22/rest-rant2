const React = require('react')
const Default = require('./layout/Default')

function Index(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
          <div className="col-sm-6">
            <h2>
              <a href={`/places/${index}`}>{place.name}</a>
            </h2>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
    return (
        <Default>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = Index