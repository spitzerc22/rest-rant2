const React = require('react')
const Default = require('./layout/Default')

function Home () {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
                <div className="">
                    <img src="/images/chia-cup.jpg" alt="chia fruit cup" />
                    <div>
                        Photo by <a href="https://unsplash.com/photos/MsTOg6rhRVk">Brenda Godinez</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Default>
    )
}

module.exports = Home