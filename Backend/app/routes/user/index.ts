import { Request, Response, Router } from "express";
import authMiddleware from "../../middlewares/AuthMiddeware";
import UserController from "../../controllers/User/UserController";

const routes = Router();

routes.get("/", authMiddleware, UserController.index);
routes.get("/:id", authMiddleware, UserController.show);
routes.post("/", UserController.store);
routes.put("/:id", authMiddleware, UserController.update);
routes.delete("/:id", authMiddleware, UserController.delete);

export default routes;