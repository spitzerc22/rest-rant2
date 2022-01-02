const React = require('react')
const Default = require('./layout/Default')

function Edit (data) {
    return (
        <Default>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Places Name</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="name" 
                                name="name" 
                                defaultValue={data.place.name}
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Picture</label>
                            <input 
                                className="form-control" 
                                type="url" 
                                id="picture" 
                                name="picture"
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="city" 
                                name="city"
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="state" 
                                name="state"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cuisine">Cuisine</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="cuisine" 
                                name="cuisine" 
                                required
                            />
                        </div>
                    </div>
                <br/>
                <input className="btn btn-primary" type="submit" value="Done Editing"/>
            </form>
            </main>
        </Default>
    )
}

module.exports = Edit