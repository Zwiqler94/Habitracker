const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
    res.send("hello world");
});

app.get("/house",  (req:any, res:any) => {
    res.send("hello house");
});

export {app};
