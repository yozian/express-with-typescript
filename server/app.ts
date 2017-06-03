import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";

import * as path from "path";


const app = express();


app.use(morgan("dev"))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.send("Test");
})

app.listen(3000, () => {
    console.log("app starts")
})
