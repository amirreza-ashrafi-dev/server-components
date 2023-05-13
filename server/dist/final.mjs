import express from "express";
import { renderToPipeableStream } from "react-dom/server";
import App from "../../client/dist/final.mjs";
import React from "react";
import path from "path";
const app = express();
app.get("/", (req, res) => {
  const { pipe } = renderToPipeableStream(/* @__PURE__ */ React.createElement(App, null), {
    bootstrapScripts: ["/main.js"],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    }
  });
});
app.get("/**.js", (req, res) => {
  console.log(path.resolve());
  return res.sendFile(path.resolve() + "/client/dist/client.js");
});
app.listen(3e3, () => console.log("listening to port 3000"));
