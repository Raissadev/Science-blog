import { Router, Request, Response } from "express";
import attempts from "../utils/attempts";
import authMiddleware from  "../middlewares/AuthMiddeware";

import user from "./user/index";
import auth from "./user/auth";

const routes: any = Router();

routes.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});

routes.use("/auth", auth);
routes.use("/users", user);

export default routes;