const React = require('react')

function Default(html) {
    return (
        <html>
            <head>
                <title>Rest Rant</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default