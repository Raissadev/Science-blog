import { Router } from "express";
import MailValidate from "../../middlewares/requests/mail-validate";
import Mail from "../../middlewares/Mail";

const routes = Router();

routes.post("/", MailValidate.validate, Mail.sendMail);

export default routes;