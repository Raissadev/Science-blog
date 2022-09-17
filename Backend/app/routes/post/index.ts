import { Request, Response, Router } from "express";
import multer from "multer";
import Upload from "../../middlewares/Upload";
import PostController from "../../controllers/PostController";
import authMiddleware from "../../middlewares/AuthMiddeware";
import postPermission from "../../middlewares/permissions/PostPermission";
import PostValidate from "../../middlewares/requests/post-validate";

const routes = Router();

routes.get("/", PostController.index);
routes.get("/:id", PostController.show);
routes.post("/", multer(Upload.getConfig).single("thumb"), PostValidate.validate, authMiddleware, postPermission, PostController.store);
routes.put("/:id", PostValidate.validate, authMiddleware, postPermission, PostController.update);
routes.delete("/:id", authMiddleware, postPermission, PostController.delete);

export default routes;