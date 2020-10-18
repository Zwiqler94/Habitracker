const express = require("express");
const app = express();
import HabitController from './habits/HabitController';
import HabitListController from './lists/ListController';
import * as bodyParser from 'body-parser';

app.use(bodyParser.json())


app.get("/", (req: any, res: any) => {
    res.send("invalid request");
});

app.post("/habits", (req: any, res: any) => {
    HabitController.create(req, res);
});

app.post("/habits/:id/complete", (req: any, res: any) => {
    HabitController.addCompletion(req, res);
});

app.get("/habits/:id/complete", (req: any, res: any) => {
    HabitController.calculatePercentCompleted(req, res);
});

app.post("/habit-lists", (req: any, res: any) => {
    HabitListController.create(req, res);
});



export { app };
