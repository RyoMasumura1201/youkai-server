import express, {Request, Response} from "express";
import * as yokaiModel from "../models/yokai";
import {Yokai, BasicYokai} from "../types/yokai";

export const yokaiRouter = express.Router();

yokaiRouter.get("/", async (req: Request, res: Response) => {
    yokaiModel.findAll((err: Error, yokais: Yokai[])=>{
        if (err) {
            return res.status(500).json({"errorMessage" : err.message});
        }

        res.status(200).json(yokais);
    });
});