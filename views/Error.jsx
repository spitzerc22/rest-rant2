const React = require('react')
const Default = require('./layout/Default')

function Error () {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Default>
    )
}

module.exports = Error