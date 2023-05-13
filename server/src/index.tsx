import express from 'express';
import * as reactServerDom from 'react-dom/server';
import App from '../../client/dist/final.mjs';
import React from 'react';
import path from 'path';

const app = express();

app.get("/", async (req, res) => {
    const stream = await reactServerDom.renderToPipeableStream(<App />, {
        bootstrapScripts: ['/main.js'],
        onShellReady() {
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            stream.pipe(res);
        },
    });
});

app.get("/**.js", (req, res) => {
    console.log(path.resolve());
    return res.sendFile(path.resolve() + "/client/dist/client.js");
})

app.listen(3000, () => console.log("listening to port 3000"));
