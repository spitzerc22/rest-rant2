const React = require('react')
const Default = require('./layout/Default')

function New () {
    return (
        <Default>
            <h2>Add a New Place</h2>
            <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="name">Places Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Picture</label>
                    <input 
                        className="form-control"
                        type="url" 
                        id="picture" 
                        name="picture"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="city" 
                        name="city"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="state" 
                        name="state"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisine</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="cuisines" 
                        name="cuisines" 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="founded">Founded In</label>
                    <input 
                        type="number"
                        className="form-control" 
                        id="founded" 
                        name="founded" 
                        defaultValue={new Date().getFullYear()}
                    />
                </div>
                <br/>
                <input className="btn btn-primary" type="submit" value="Add Place"/>
            </form>
        </Default>
    )
}

 module.exports = New