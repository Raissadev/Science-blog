import { Request, Response, Router } from "express";
import multer from "multer";
import Upload from "../../middlewares/Upload";
import PostController from "../../controllers/PostController";
import authMiddleware from "../../middlewares/AuthMiddeware";
import PostValidate from "../../middlewares/requests/post-validate";

const routes = Router();

routes.get("/", authMiddleware, PostController.index);
routes.get("/:id", authMiddleware, PostController.show);
routes.post("/", multer(Upload.getConfig).single("thumb"), PostValidate.validate, authMiddleware, PostController.store);
routes.put("/:id", PostValidate.validate, authMiddleware, PostController.update);
routes.delete("/:id", authMiddleware, PostController.delete);

export default routes;