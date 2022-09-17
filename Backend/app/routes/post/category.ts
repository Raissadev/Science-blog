import { Request, Response, Router } from "express";
import CategoryController from "../../controllers/CategoryController";
import authMiddleware from "../../middlewares/AuthMiddeware";
import postPermission from "../../middlewares/permissions/PostPermission";
import CategoryValidate from "../../middlewares/requests/category-validate";

const routes = Router();

routes.get("/", CategoryController.index);
routes.get("/:id", CategoryController.show);
routes.post("/", CategoryValidate.validate, authMiddleware, postPermission, CategoryController.store);
routes.put("/:id", CategoryValidate.validate, authMiddleware, postPermission, CategoryController.update);
routes.delete("/:id", authMiddleware, postPermission, CategoryController.delete);

export default routes;