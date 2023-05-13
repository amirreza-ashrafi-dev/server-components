import React from 'react';

const App = () => {
    return <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="/styles.css"></link>
            <title>React server rendering</title>
        </head>
        <body>
            <h1 onClick={()=>console.log("Clicked h1")}>react server side renderd</h1>
            <div>this is a test application</div>
        </body>
    </html>
};

export default App;