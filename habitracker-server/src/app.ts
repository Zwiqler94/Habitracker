const express = require("express");
const app = express();
import HabitController from './habits/HabitController';
import HabitListController from './lists/ListController';
import * as bodyParser from 'body-parser';
import { HabitReqSchema } from './habits/HabitReqSchema';
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())


app.get("/", (req: any, res: any) => {
    res.send("invalid request");
});

app.post("/habits", HabitReqSchema, (req: any, res: any) => {
    HabitController.create(req, res);
});

app.get("/habits", HabitReqSchema, (req: any, res: any) => {
    HabitController.findHabitsByListId(req, res);
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

app.get("/habit-lists", (req: any, res: any) => {
    HabitListController.getAllLists(req, res);
});

app.get("/habit-lists/:id", (req: any, res: any) => {
    HabitListController.getList(req, res);
});

// app.get("/habit-lists/search", (req: any, res: any) => {
//     HabitListController.searchForList(req, res);
// });

export { app };
