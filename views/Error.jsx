const React = require('react')
const Default = require('./layout/Default')

function Error () {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't REACH this page!</p>
                <img src="/images/catError.jpg" alt="Cat reaching for help" />
            </main>
        </Default>
    )
}

module.exports = Error