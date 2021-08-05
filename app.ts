import * as dotenv from "dotenv";
import express from "express";
import { yokaiRouter } from "./routes/yokaiRouter" ;

const app = express();
dotenv.config();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

app.use(express.json());
app.use("/yokais", yokaiRouter);

app.listen(process.env.PORT, () => {
    console.log("Node server started running");
});
