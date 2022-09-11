import { Request, Response, Router } from "express";
import AuthController from "../../controllers/User/AuthController";
import UserValidate from "../../middlewares/requests/user-validate";

const routes = Router();

routes.post("/", UserValidate.authValidate, AuthController.authenticate);

export default routes;