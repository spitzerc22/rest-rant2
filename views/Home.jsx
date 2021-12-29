const React = require('react')
const Default = require('./layout/Default')

function Home () {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Default>
    )
}

module.exports = Home