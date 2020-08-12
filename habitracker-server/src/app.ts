const express = require("express");
const app = express();
import HabitController from './habits/HabitController';
import HabitListController from './lists/ListController';
import * as bodyParser from 'body-parser';

app.use(bodyParser.json())


app.get("/", (req: any, res: any) => {
    res.send("invalid request");
});

app.post("/habit", (req: any, res: any) => {
    HabitController.create(req, res)
});

app.post("/habit-list", (req: any, res: any) => {
    HabitListController.create(req, res)
});

export { app };
