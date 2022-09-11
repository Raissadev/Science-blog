import { Request, Response, Router } from "express";
import authMiddleware from "../../middlewares/AuthMiddeware";
import UserController from "../../controllers/User/UserController";
import UserValidate from "../../middlewares/requests/user-validate";

const routes = Router();

routes.get("/", authMiddleware, UserController.index);
routes.get("/:id", authMiddleware, UserController.show);
routes.post("/", UserValidate.validate, UserController.store);
routes.put("/:id", UserValidate.updateValidate, authMiddleware, UserController.update);
routes.delete("/:id", authMiddleware, UserController.delete);

export default routes;