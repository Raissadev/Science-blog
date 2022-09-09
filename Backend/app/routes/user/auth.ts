import { Request, Response, Router } from "express";
import AuthController from "../../controllers/User/AuthController";

const routes = Router();

routes.post("/", AuthController.authenticate);

export default routes;