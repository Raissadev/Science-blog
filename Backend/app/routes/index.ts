import { Router, Request, Response } from "express";
import attempts from "../utils/attempts";
import authMiddleware from  "../middlewares/AuthMiddeware";

const routes: any = Router();

routes.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});

export default routes;